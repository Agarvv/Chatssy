from django.db import models
from django.core.exceptions import ValidationError

class User(models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    profilePicture = models.URLField()

    def clean(self):
        if "@" not in self.email:
            raise ValidationError("Email Should Be Valid")

    def __str__(self):
        return self.username