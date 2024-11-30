from rest_framework import serializers
from django.core.exceptions import ValidationError
from apps.user.models import User

class SendResetPasswordSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['email']
    
    def validate_email(self, value):
        if not self.email:
            raise ValidationError('Email Id Required')
            
        if not User.objects.filter(email = self.email).exists():
            raise ValidationError('That Email Does Not Exist')
            
        return value