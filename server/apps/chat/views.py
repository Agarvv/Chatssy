from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Chat
from .serializers.StartChatSerializer import StartChatSerializer
from .serializers.UserContactsSerializer import UserContactsSerializer
from .serializers.ChatSerializer import ChatSerializer 
from apps.util.AuthOutil import get_authenticated_user_id
from .chatService import handle_chat_creation, get_user_contacts

class ChatApiView(APIView):
    # create user chat 
    def post(self, request, *args, **kwargs):
        serializer = StartChatSerializer(data=request.data)
        if serializer.is_valid():
            sender_id = get_authenticated_user_id(request.COOKIES.get('jwt'))
            receiver_id = serializer.validated_data['receiver_id']
            chat = handle_chat_creation(sender_id, receiver_id, 'chat')
            return Response({"chat": ChatSerializer(chat).data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # get user contacts, groups, chats, people to meet
    def get(self, request, *args, **kwargs):
    
        user_id = get_authenticated_user_id(request.COOKIES.get('jwt'))
        
        contacts = get_user_contacts(user_id)
        
        serializer = UserContactsSerializer(contacts)
        
        return Response({"contacts": serializer.data}, status=status.HTTP_200_OK)