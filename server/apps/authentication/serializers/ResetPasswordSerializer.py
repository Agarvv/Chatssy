from rest_framework import serializers
from django.core.exceptions import ValidationError

class ResetPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField()
    token = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        return data
