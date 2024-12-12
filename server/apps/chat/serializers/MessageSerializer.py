from rest_framework import serializers
from django.core.exceptions import ValidationError
from ..models import Message

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('type', 'value', 'sender_id', 'receiver_id')
