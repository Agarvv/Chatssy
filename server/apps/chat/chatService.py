from .models import Chat

def handle_chat_creation(sender_id, receiver_id, type):
    chat = Chat.objects.create(
        type=type,
        sender_id=sender_id,
        receiver_id=receiver_id
    )
    return chat
