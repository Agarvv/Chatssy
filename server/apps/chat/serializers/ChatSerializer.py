from rest_framework import serializers
from apps.user.models import User 
from apps.user.serializers.UserDetailsSerializer import UserDetailsSerializer  
from ..models import Chat

class ChatSerializer(serializers.ModelSerializer):
    user_to_display_info = serializers.SerializerMethodField()

    class Meta:
        model = Chat
        fields = ('id', 'sender_id', 'receiver_id', 'user_to_display_info', 'messages')
  
    def get_user_to_display_info(self, obj):
        user_id = self.context.get('user_id')
        
        if isinstance(obj, dict):
            sender_id = obj.get('sender_id') 
            receiver_id = obj.get('receiver_id')
        elif isinstance(obj, Chat):
            sender_id = obj.sender_id
            receiver_id = obj.receiver_id

        other_user_id = receiver_id if sender_id == user_id else sender_id
        other_user = User.objects.get(id=other_user_id)

        return UserDetailsSerializer(other_user).data