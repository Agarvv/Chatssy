from rest_framework.response import Response
from rest_framework.decorators import api_view
from datetime import timedelta
from django.utils import timezone

from .serializers.RegisterSerializer import RegisterSerializer 
from .serializers.LoginSerializer import LoginSerializer 
from .serializers.SendResetPasswordSerializer import SendResetPasswordSerializer
from .serializers.ResetPasswordSerializer import ResetPasswordSerializer
from .authService import register_user, login_user, send_reset_password_email, reset_password, check_auth
from rest_framework import status
from rest_framework.exceptions import NotAuthenticated



@api_view(["POST"])
# Register user
def register(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        register_user(serializer.validated_data['email'])
        return Response({
            "message": "¡Welcome To Chatssy!"
        })

    return Response({
        "errors": serializer.errors
    }, status=400)


# Login user
@api_view(["POST"])
def login(request):
    print(request.data)
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        
        jwt_token = login_user(serializer, request)
        
        response = Response({
            "access_token": jwt_token
        })


        expiration_time = timezone.now() + timedelta(days=1)
        response.set_cookie(
            'jwt',
            jwt_token,
            httponly=True,
            secure=True,
            expires=expiration_time,
            samesite='None'
        )
        return response
    print(serializer.errors)
    return Response({
        "val errors": serializer.errors
    }, status=400)


# Send reset password URL to user email
@api_view(["POST"])
def send_reset_password(request):
    serializer = SendResetPasswordSerializer(data=request.data)
    if serializer.is_valid():
        send_reset_password_email(serializer.validated_data['email'])
        return Response({
            "message": "Check Your Email!"
        })
    
    return Response({
        "errors": serializer.errors
    }, status=400)


# Reset user password
@api_view(["POST"])
def reset_password_view(request):
    serializer = ResetPasswordSerializer(data=request.data)
    if serializer.is_valid():
        reset_password(serializer)
        return Response({
            "message": "Check Your Email!"
        })

    return Response({
        "errors": serializer.errors
    }, status=400)

@api_view(["GET"])
def check_if_authenticated(request):
    jwt_token = request.COOKIES.get('jwt')
    if jwt_token:
        is_valid = check_auth(jwt_token)
        if is_valid:
            return Response({
                "message": "You are authenticated!"
            })
        raise NotAuthenticated("Your token is invalid.")
    raise NotAuthenticated("Please log in.")

    
        