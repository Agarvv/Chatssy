from rest_framework import serializers
from apps.user.models import User

class UpdateBanner(serializers.Serializer):
    banner = serializers.CharField()
    

    