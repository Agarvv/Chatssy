from rest_framework import serializers
from apps.user.models import User

class UpdateBannerSerializer(serializers.Serializer):
    banner = serializers.CharField()
    

    