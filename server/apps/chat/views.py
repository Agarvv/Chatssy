from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Chat
from .serializers.StartChatSerializer import StartChatSerializer
from .serializers.UserContactsSerializer import UserContactsSerializer
from apps.util.AuthOutil import get_authenticated_user_id
from .chatService import handle_chat_creation, get_user_contacts

class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = StartChatSerializer(data=request.data)
        if serializer.is_valid():
            sender_id = get_authenticated_user_id(request.COOKIES.get('jwt'))
            receiver_id = serializer.validated_data['receiver_id']
            chat = handle_chat_creation(sender_id, receiver_id, 'chat')
            return Response({"chat": chat})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        user_id = get_authenticated_user_id(request.COOKIES.get('jwt'))
        contacts = get_user_contacts(user_id)
        serializer = UserContactsSerializer(contacts)
        return Response({"contacts": contacts})
    
    def get_serializer_class(self):
        if self.action == 'create':
            return StartChatSerializer
        elif self.action == 'list' or self.action == 'retrieve':
            return UserContactsSerializer
        return super().get_serializer_class()


        