from django.core.exceptions import ValidationError
from ..models import Chat
from .MessageSerializer import MessageSerializer
from rest_framework import serializers
from apps.user.serializers.UserDetailsSerializer import UserDetailsSerializer

class ChatSerializer(serializers.ModelSerializer):
    messages = MessageSerializer(many=True)
    user_to_display_info = serializers.SerializerMethodField()

    class Meta:
        model = Chat
        fields = ('id', 'sender_id', 'receiver_id', 'messages', 'user_to_display_info')

    def get_user_to_display_info(self, obj):
        user_id = self.context.get('user_id')
        other_user = obj.receiver if obj.sender_id == user_id else obj.sender
        return UserDetailsSerializer(other_user).data