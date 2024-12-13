from rest_framework import serializers
from django.core.exceptions import ValidationError
from .ChatSerializer import ChatSerializer
from apps.groups.serializers.GroupSerializer import GroupSerializer
from apps.user.serializers.UserSerializer import UserSerializer


class UserContactsSerializer(serializers.Serializer):
    users = UserSerializer(many=True)
    groups = GroupSerializer(many=True)
    chats = ChatSerializer(many=True)
