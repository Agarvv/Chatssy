from rest_framework import serializers
from django.core.exceptions import ValidationError
from apps.user.models import User


class StartChatSerializer(serializers.Serializer):
    receiver_id = serializers.IntegerField() 
    
    def validate(self, data):
        if not data.receiver_id:
            raise ValidationError('receiver id must be provided')
