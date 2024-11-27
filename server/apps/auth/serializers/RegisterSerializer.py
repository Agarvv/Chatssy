from rest_framework import serializers
from django.core.exceptions import ValidationError
from user.models.User import User 

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
    
    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("That Email Already Exists")
        return value

    def validate_password(self, value):
        if len(value) < 8:
            raise serializers.ValidationError("Password should have at least 8 chars")
        return value

    def validate_username(self, value):
        if not value:
            raise serializers.ValidationError("Username is required")
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("Username is already taken")
        return value