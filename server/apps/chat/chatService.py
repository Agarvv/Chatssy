from .models import Chat 


def handle_chat_creation(sender_id, receiver_id):
    chat = Chat.objects.create(sender_id=sender_id, receiver_id=receiver_id)
    return chat 
    

    # sender id is the actual user id.
    