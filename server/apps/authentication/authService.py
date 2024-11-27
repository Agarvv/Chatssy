
from django.contrib.auth import authenticate, login, logout
from user.models.User import User 
from util.JwtUtil import generate_jwt

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
    if user is not None:
        login(request, user)
        jwt = generate_jwt(user)
        
        return jwt
    else:
        return None 
    
