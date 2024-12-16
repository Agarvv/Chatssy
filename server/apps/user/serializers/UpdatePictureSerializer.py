from rest_framework import serializers
from apps.user.models import User

class UpdatePictureSerializer(serializers.Serializer):
    picture = serializers.CharField()
    

    