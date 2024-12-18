from channels.generic.websocket import AsyncWebsocketConsumer
import json
from apps.chat.models import Message, Chat
from apps.groups.models import GroupMessage, Group
from channels.db import database_sync_to_async
from apps.user.models import User


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        try:
            data = json.loads(self.scope['query_string'].decode('utf-8'))
            user = self.scope['user']
            
            await self.verify_if_authenticated(user)
            
            chat = await self.get_chat(data['identifier'])
            await self.verify_chat_authorization(user, chat)
            
            await self.accept()
        except Exception as e:
            await self.close()
            print(f"Connection error: {e}") 

    async def disconnect(self, close_code):
        print(f"Disconnected with code: {close_code}")

    async def receive(self, json_data):
        try:
            data = json.loads(json_data)
            user = self.scope['user']

            await self.verify_if_authenticated(user)

            chat = await self.get_chat(data['identifier'])

            message = await self.create_message(
                chat,
                data['type'],
                data['value'],
                user.id,
                data['receiver_id']
            )

            await self.send(text_data=json.dumps({
                'type': 'message',
                'value': message.value,
                'id': message.id,
                'type': message.type,
            }))
        except Exception as e:
            await self.send(text_data=json.dumps({
                'type': 'error',
                'message': str(e),
            }))

    @database_sync_to_async
    def get_chat(self, chat_id):
        try:
            return Chat.objects.get(id=chat_id)
        except Chat.DoesNotExist:
            raise Exception("Chat not found")

    @database_sync_to_async
    def create_message(self, chat, message_type, message_value, sender_id, receiver_id):
        try:
            return Message.objects.create(
                type=message_type,
                value=message_value,
                chat=chat,
                sender_id=sender_id,
                receiver_id=receiver_id,
            )
        except Exception as e:
            raise Exception(f"Failed to create message: {e}")

    async def verify_chat_authorization(self, user, chat):
        if not (chat.sender_id == user.id or chat.receiver_id == user.id):
            raise Exception("Not authorized to access this chat")

    async def verify_if_authenticated(self, user):
        if not user.is_authenticated:
            raise Exception("User is not authenticated")
