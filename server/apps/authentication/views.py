from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.utils import timezone
from datetime import timedelta

from .serializers.LoginSerializer import LoginSerializer
from .serializers.RegisterSerializer import RegisterSerializer 
from .serializers.ResetPasswordSerializer import ResetPasswordSerializer 
from .serializers.SendResetPasswordSerializer import SendResetPasswordSerializer

from .authService import (
    register_user,
    login_user,
    send_reset_password_email,
    reset_password,
    check_auth
)
from rest_framework.exceptions import NotAuthenticated

class AuthViewSet(viewsets.ViewSet):
    """
     authentication viewset 
    """

    @action(detail=False, methods=['post'])
    def register(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            register_user(serializer)
            return Response({
                "message": "¡Welcome To Chatssy!"
            })

        return Response({
            "errors": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'])
    def login(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            data = login_user(serializer, request)
            response = Response({
                "access_token": data['jwt'],
                "user_id": data['user_id']
            })

            expiration_time = timezone.now() + timedelta(days=1)
            response.set_cookie(
                'jwt',
                data['jwt'],
                httponly=True,
                secure=True,
                expires=expiration_time,
                samesite='None'
            )
            return response

        return Response({
            "errors": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'])
    def send_reset_password(self, request):
        serializer = SendResetPasswordSerializer(data=request.data)
        if serializer.is_valid():
            send_reset_password_email(serializer.validated_data['email'])
            return Response({
                "message": "Check Your Email!"
            })
        
        return Response({
            "errors": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'])
    def reset_password(self, request):
        serializer = ResetPasswordSerializer(data=request.data)
        if serializer.is_valid():
            reset_password(serializer)
            return Response({
                "message": "Check Your Email!"
            })

        return Response({
            "errors": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
     
     # check user auth
    @action(detail=False, methods=['get'])
    def check(self, request):
        jwt_token = request.COOKIES.get('jwt')
        if jwt_token:
            is_valid = check_auth(jwt_token)
            if is_valid:
                return Response({
                    "message": "OK"
                })
            raise NotAuthenticated("Your token is invalid.")
        raise NotAuthenticated("Please log in.")