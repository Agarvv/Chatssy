from rest_framework import serializers
from django.core.exceptions import ValidationError
from apps.user.models import User

class SendResetPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField()