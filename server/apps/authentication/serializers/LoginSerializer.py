from rest_framework import serializers
from django.core.exceptions import ValidationError
from user.models.User import User 

class LoginSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User 
        fields = ['email', 'password']
        
    def validate_email(self, value):
        if not value:
            raise ValidationError('Email Is Required')
        if not User.objects.filter(email = value).exists():
            raise ValidationError('That Email Does Not Exist.')
        
        return value 
    
    def validate_password(self, value):
        if not value:
            raise ValidationError('Password Is Required')