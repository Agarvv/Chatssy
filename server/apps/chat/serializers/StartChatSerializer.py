from rest_framework import serializers
from django.core.exceptions import ValidationError
from user.models import User


class StartChatSerializer(serializers.Serializer):
    receiver_id = serializers.NumberField() 
    
    def validate(self, data):
        if not receiver_id:
            raise ValidationError('receiver id must be provided')
