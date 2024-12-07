from rest_framework import serializers
from apps.user.models import User
from rest_framework.exceptions import ValidationError

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password']

    def validate_email(self, value):
        return value

    def validate_password(self, value):
        if not value:
            raise ValidationError('Password Is Required')
        return value
