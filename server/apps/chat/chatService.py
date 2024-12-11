from .models import Chat
from apps.user.userService import find_all_users
from apps.groups.groupsService import find_all_groups
from.serializers.UserChatSerializer import UserChatSerializer
from .serializers.UserContactsSerializer import UserContactsSerializer

def handle_chat_creation(sender_id, receiver_id, type):
    chat = Chat.objects.create(
        type=type,
        sender_id=sender_id,
        receiver_id=receiver_id
    )
    return chat
# find user CHATS
def find_user_chats(user_id):
    chats = Chat.objects.get(sender_id=user_id)
    serializer = UserChatSerializer(chats)
    return serializer.data

# find user CONTACTS, like groups, chats and people to meet.
def get_user_contacts(user_id):
    users = find_all_users()
    groups = find_all_groups()
    chats = find_user_chats(user_id)
    contacts = {
        "users": users,
        "groups": groups,
        "chats": chats
    }
    return contacts 