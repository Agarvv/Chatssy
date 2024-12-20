from django.core.exceptions import ValidationError
from django.db import models
from django.utils.timezone import now

class Chat(models.Model):
    sender_id = models.IntegerField()
    receiver_id = models.IntegerField()
    last_message = models.CharField(max_length=255)
    type = models.CharField(max_length=255) # can be 'group' OR 'chat' meaning group chat or private user chat
    
    def clean(self):
        if self.sender_id == self.receiver_id:
            raise ValidationError("Sender and receiver cannot be the same.")

class Message(models.Model):
    # Image, Video, Audio, Text 
    type = models.CharField(max_length=255)
    # Message text, Image URL, video URL, audio URL
    value = models.CharField(max_length=255)
    
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE, related_name='messages')
    sender_id = models.IntegerField() 
    receiver_id = models.IntegerField()

    def clean(self):
        if self.sender_id == self.receiver_id:
            raise ValidationError('You cannot send messages to yourself.')