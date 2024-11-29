from rest_framework import serializers
from django.core.exceptions import ValidationError
from user.models.User import User 

class ResetPasswordSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['email', 'token', 'new_password']
    
    def validate_email(self, value):
        if not value:
            raise ValidationError('Email Is Required')
            
        if not User.objects.filter(email=value).exists():
            raise ValidationError('That email does not exist.')
        return value 
    
    def validate_token(self, value):
        
        if not value:
            raise ValidationError('Token Is Required')
        
        return value 
        
    def validate_new_password(self, value):
        if not value:
            raise ValidationError('Password is required')
            
        if len(value) < 8 
            raise ValidationError('Password must be at least 8 chars')
        return value
    
