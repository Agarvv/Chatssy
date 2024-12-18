from channels.generic.websocket import AsyncWebsocketConsumer
import json

connected_users = {} 

class UserConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        user = self.scope['user']

        if user.is_authenticated:
            connected_users[user.id] = self

            await self.notify_all(user.id, True)

            await self.accept()
        else:
            await self.close()

    async def disconnect(self, close_code):
        user = self.scope['user']

        if user.id in connected_users:
            del connected_users[user.id]

            await self.notify_all(user.id, False)

    async def notify_all(self, user_id, connected):
        for connection in connected_users.values():
            await connection.send(text_data=json.dumps({
                "type": "status_update",
                "user_id": user_id,
                "connected": connected
            }))
