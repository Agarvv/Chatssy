
from django.contrib.auth import authenticate, login, logout
from apps.user.models import User
from .models import ResetToken
from apps.util.JwtUtil import generate_jwt, verify_jwt
from django.core.mail import send_mail
import secrets 
from django.utils import timezone
from datetime import timedelta
from django.shortcuts import get_object_or_404
from django.contrib.auth.hashers import make_password
from .exceptions import ResetPasswordTokenExpired


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
        raise Exception('Your Email or password is not valid')

    login(request, user)
    jwt = generate_jwt(user)
        
    return {
        'user_id': user.id,
        'jwt': jwt
    }
    
    

def send_reset_password_email(user_email):
    token = secrets.token_urlsafe(32)
    expire_date = timezone.now() + timedelta(hours=1)
    
    ResetToken.objects.create(
        user_email=user_email,
        token=token,
        expiration_date=expire_date
    )
    
    url = f"https://chatssy.vercel.app/reset-password/{token}/{user_email}"
    send_mail(
    'Reset Your Password At Chatssy',
    f"Click on this URL to reset Your password, this will expire in one hour: {url}",
    'casluagarv@gmail.com',
    [user_email],  
    fail_silently=False
    )
    

def reset_password(serializer):
    user_email = serializer.validated_data['email']
    user_new_password = serializer.validated_data['password']
    
    # reset token received from the frontend 
    received_reset_token = serializer.validated_data['token']
    
    
    user = get_object_or_404(User, email=user_email)
    resetToken = get_object_or_404(ResetToken, user_email=user_email, token=received_reset_token)
    
    if resetToken.is_expired():
        raise ResetPasswordTokenExpired('Your Token Is Expired', 401)
    
    hashed_password = make_password(user_new_password)
    user.password = hashed_password
    user.save()
    resetToken.delete()


def check_auth(jwt_token):
    try:
        verify_jwt(jwt_token)
        return True
    except:
        return False
