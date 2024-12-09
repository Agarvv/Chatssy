from django.db import models
from django.core.exceptions import ValidationError
from datetime import timedelta, datetime
from django.utils.timezone import now


class ResetToken(models.Model):
    user_email = models.EmailField()
    token = models.CharField(max_length=360)
    expiration_date = models.DateTimeField()  

    def clean(self):
        if not self.token:
            raise ValidationError("Token is required")
        if not self.user_email:
            raise ValidationError("User email is required")
        
        if not self.expiration_date:
            raise ValidationError("Expiration date is required")
            
        
    def is_expired(self):
        return now() > self.expiration_date