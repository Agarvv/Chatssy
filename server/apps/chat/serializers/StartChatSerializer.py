from rest_framework import serializers
from django.core.exceptions import ValidationError
from apps.user.models import User


class StartChatSerializer(serializers.Serializer):
    receiver_id = serializers.IntegerField() 
    
