from django.http import JsonResponse 
from django.http import request
# i love Python <3

from apps.util.AuthOutil import get_authenticated_user_id
from apps.chat.chatService import handle_chat_creation, get_user_contacts
from apps.chat.serializers.UserContactsSerializer import UserContactsSerializer

#def check_server_health(request):
#    return JsonResponse({
#        "message": "Django Server Running!"
#    })

def check_server_health(request):
       user_id = get_authenticated_user_id(request.COOKIES.get('jwt'))
        
        contacts = get_user_contacts(user_id)
        
        serializer = UserContactsSerializer(contacts)
        
        return Response({"contacts": contacts})