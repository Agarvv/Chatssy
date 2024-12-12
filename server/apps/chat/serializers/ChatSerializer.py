from django.core.exceptions import ValidationError
from ..models import Chat
from .MessageSerializer import MessageSerializer
from rest_framework import serializers

# full chat serializer with messages
class ChatSerializer(serializers.ModelSerializer):
    messages = MessageSerializer(many=True)
    class Meta:
        model = Chat
        fields = ('id', 'sender_id', 'receiver_id', 'messages')