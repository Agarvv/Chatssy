from rest_framework import serializers
from apps.user.models import User

class UpdateBioSerializer(serializers.Serializer):
    bio = serializers.CharField()
    

    