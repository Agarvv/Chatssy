class ChatSerializer(serializers.ModelSerializer):
    messages = MessageSerializer(many=True)
    user_to_display_info = serializers.SerializerMethodField()

    class Meta:
        model = Chat
        fields = ('id', 'sender_id', 'receiver_id', 'messages', 'user_to_display_info')

    def get_user_to_display_info(self, obj):
        user_id = self.context.get('user_id')
        
        other_user = User.objects.get(id=obj.receiver_id) if obj.sender_id == user_id else User.objects.get(id=obj.sender_id)
        
        return UserDetailsSerializer(other_user).data