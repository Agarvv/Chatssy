from django.db import models

class Group(models.Model):
    name = models.CharField(max_length=50, unique=True) 
    picture = models.URLField()

class GroupMessage(models.Model):
    group = models.ForeignKey(Group, on_delete=models.CASCADE)  #  group
    type = models.CharField(max_length=255)  # Type of message (e.g., Image, Video, Text)
    value = models.CharField(max_length=255)  # Content of the message (e.g., URL or text)