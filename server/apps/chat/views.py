from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .chatService import handle_chat_creation

from util.AuthOutil import get_authenticated_user_id
from .serializers.StartChatSerializer import StartChatSerializer

class ChatViewSet(viewsets.ModelViewSet):
    def create(self, request, *args, **kwargs):
        serializer = StartChatSerializer(data=request.data)
        if serializer.is_valid():
            sender_id = get_authenticated_user_id(request.COOKIES.get('jwt'))
            receiver_id = serializer.validated_data['receiver_id']
            chat = handle_chat_creation(sender_id, receiver_id, 'chat')
            return Response({
              "chat": chat
            })
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            