from .serializers.UserSerializer import UserSerializer
from .models import User

def find_all_users():
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return serializer.data  
    
def update_user_field(field, value, user):
    setattr(user, field, value)
    user.save()
    