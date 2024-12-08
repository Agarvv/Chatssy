from rest_framework import serializers
from django.core.exceptions import ValidationError
from apps.user.models import User

class ResetPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField()
    token = serializers.CharField()
    password = serializers.CharField()
    
   