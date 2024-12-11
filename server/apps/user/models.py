from django.db import models
from django.core.exceptions import ValidationError
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


class UserManager(BaseUserManager):
    def create_user(self, username, email, password=None):
        if not username or not email or not password:
            raise ValidationError("Verify the fields, please.")
        
        email = self.normalize_email(email)
        user = self.model(username=username, email=email)
        user.set_password(password)  
        user.save(using=self._db)

        return user

class User(AbstractBaseUser):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255) 
    profilePicture = models.URLField()
    bio = models.CharField(max_length=255)


    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']  

    def clean(self):
        if "@" not in self.email:
            raise ValidationError("Email Should Be Valid")

    def __str__(self):
        return self.username
