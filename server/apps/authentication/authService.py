
from django.contrib.auth import authenticate, login, logout
from apps.user.models import User
from .models import ResetToken
from apps.util.JwtUtil import generate_jwt
from django.core.mail import send_mail
import secrets 
from django.utils import timezone
from datetime import timedelta
from django.shortcuts import get_object_or_404
from django.contrib.auth.hashers import make_password
from rest_framework.exceptions import AuthenticationFailed



def register_user(serializer):
    user = User.objects.create_user(
        username=serializer.validated_data['username'],
        email=serializer.validated_data['email'],
        password=serializer.validated_data['password']  
    )

    return user
    
def login_user(serializer, request):
    user = authenticate(request, email=serializer.validated_data['email'],
                        password=serializer.validated_data['password'])
                        
    if not user:
        raise AuthenticationFailed('Your Email Or Password Is Not Valid.')
        
    login(request, user)
    jwt = generate_jwt(user)
        
    return jwt
    

def send_reset_password_email(user_email):
    token = secrets.token_urlsafe(32)
    expire_date = timezone.now() + timedelta(hours=1)
    
    ResetToken.objects.create(
        user_email=user_email,
        token=token,
        expiration_date=expire_date
    )
    
    url = f"https://chatssy.vercel.app/send-reset-url/{token}/{user_email}"
    send_mail(
    'Reset Your Password At Chatssy',
    f"Click on this URL to reset Your password, this will expire in one hour: {url}",
    'no-reply@chatssy.com', 
    ['caluagarv@gmail.com'], 
    fail_silently=False
    )

    

def reset_password(serializer):
    user_email = serializer.validated_data['email']
    user_new_password = serializer.validated_data['new_password']
    
    # reset token received from the frontend 
    received_reset_token = serializer.validated_data['token']
    
    
    user = get_object_or_404(User, email=user_email)
    resetToken = ResetToken.get_object_or_404(ResetToken, user_email=user_email, token=received_reset_token)
    
    if resetToken.is_expired():
        raise Error('Your Token Is Expired')
    
    hashed_password = make_password(user_new_password)
    user.password = hashed_password
    user.save()
    resetToken.delete()