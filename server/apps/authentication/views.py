from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse

from datetime import timedelta
from django.utils import timezone
from .serializers.RegisterSerializer import RegisterSerializer 
from .serializers.LoginSerializer import LoginSerializer 

from .authService import register_user, login_user

@api_view(["POST"])
# register user
def register(request):
    # validate data
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        register_user(serializer)
        return JsonResponse({
            "message": "¡Welcome To Chatssy!"
        })
        
    
    return JsonResponse({
        "errors": serializer.errors
    })

def login(request):
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        jwtToken = login_user(serializer, request)
        response = JsonResponse({
            "access_token": jwtToken
        })
        response.set_cookie(
            'jwt',
            jwtToken,
            httponly=True,
            secure=True,
            expires=timezone.now() + timedelta(days=1),
            samesite='None'
        )
        return response
        
