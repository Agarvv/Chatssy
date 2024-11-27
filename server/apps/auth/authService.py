from django.contrib.auth.models import User

def register_user(serializer):
    user = User.objects.create_user(
        username=serializer.validated_data['username'],
        email=serializer.validated_data['email'],
        password=serializer.validated_data['password']  
    )
    
def login_user(serializer):
    