from rest_framework import serializers
from django.core.exceptions import ValidationError
from ..models import Group

class GroupSerializer(serializers.Serializer):
    class Meta:
        model = Group 
        fields = ['id', 'name', 'picture']
