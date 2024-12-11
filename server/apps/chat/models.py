from django.core.exceptions import ValidationError
from django.db import models
from django.utils.timezone import now

class Chat(models.Model):
    sender_id = models.IntegerField()
    receiver_id = models.IntegerField()
    last_message = models.CharField()
    type = models.CharField() # can be 'group' OR 'chat' meaning groupal chat or private user chat
 
    def clean(self):
        if self.sender_id == self.receiver_id:
            raise ValidationError("Sender and receiver cannot be the same.")

class Message(models.Model):
    # Image, Video, Audio, Text 
    type = models.CharField()
    # Message text, Image URL, video URL, audio URL
    value = models.CharField()
    
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)
    sender_id = models.IntegerField() 
    receiver_id = models.IntegerField()
    
    def clean(self):
        if self.sender_id == self.receiver_id:
            raise ValidationError('You Cannot Send Messages To Yourself.')