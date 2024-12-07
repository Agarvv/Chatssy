from rest_framework import serializers
from apps.user.models import User

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate_email(self, value):
        if not User.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email does not exist.")
        return value

    def validate_password(self, value):
        if not value:
            raise serializers.ValidationError("Password is required.")
        return value
