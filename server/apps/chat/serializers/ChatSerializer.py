from rest_framework import serializers
from django.core.exceptions import ValidationError
from ..models import Chat

# full chat serializer, with messages
class UserChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ('id', 'sender_id', 'receiver_id')