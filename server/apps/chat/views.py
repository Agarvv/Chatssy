from .chatService import handle_chat_creation

from outil.AuthOutil import get_authenticated_user_id
from .serializers.StartChatSerializer import StartChatSerializer

def create_new_chat(request):
    serializer = StartChatSerializer(data=request.data)
    
    if serializer.is_valid(request):
        sender_id = get_authenticated_user_id(request.COOKIES.get('jwt'))
        
        receiver_id = serializer.validated_data['receiver_id']
        
        chat_object = handle_chat_creation(sender_id, receiver_id)
        
        return Response({
            "chat": chat_object
        })
    
    return 