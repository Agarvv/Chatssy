from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action

from .models import User 
from .serializers.UserSerializer import UserSerializer

from .UserService import find_all_users

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    """ 
     users viewset, 
     get specific user data, 
     get all users data,
     and more...
    """
    
    # find user by id 
    def retrieve(self, request, pk=None):
        user = self.get_object() 
        return Response({"user": user})# just for now
        
    # find all users 
    def list(self, request):
        serializer = UserSerializer(self.queryset)
        return Response({ "users": serializer.data })
        