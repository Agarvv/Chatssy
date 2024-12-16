from channels.generic.websocket import AsyncWebsocketConsumer 
import json 

from apps.chat.models import Message, Chat 
from apps.groups.models import GroupMessage, Group
from channels.db import database_sync_to_async 

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        print('WS working fine')

    async def disconnect(self, close_code):
        pass
        

    async def receive(self, json_data):
        data = json.loads(json_data)
  
        target = data['target_type']
        user = self.scope['user'] 

        if not user.is_authenticated:
            await self.send(text_data=json.dumps({'error': 'User not authenticated'}))
            return

        if target == "chat":
            chat = await self.get_chat(data['identifier'])
            message = await self.create_message(chat, data['type'], data['value'], user.id, data['receiver_id'])

            await self.send(text_data=json.dumps({
                'type': 'message',
                'value': message.value,
                'id': message.id,
                'type': message.type,
            }))

        elif target == "group":
            group = await self.get_group(data['identifier'])
            message = await self.create_group_message(group, data['type'], data['value'], user.id)

            await self.send(text_data=json.dumps({
                'type': 'message',
                'value': message.value,
                'id': message.id,
                'type': message.type,
            }))

    @database_sync_to_async
    def get_chat(self, chat_id):
        return Chat.objects.get(id=chat_id)

    @database_sync_to_async
    def get_group(self, group_id):
        return Group.objects.get(name=group_id)

    @database_sync_to_async
    def create_message(self, chat, message_type, message_value, sender_id, receiver_id):
        return Message.objects.create(
            type=message_type,
            value=message_value,
            chat=chat,
            sender_id=sender_id,
            receiver_id=receiver_id,
        )

    @database_sync_to_async
    def create_group_message(self, group, message_type, message_value, sender_id):
        return GroupMessage.objects.create(
            type=message_type,
            value=message_value,
            group=group,
            sender_id=sender_id,
        )
