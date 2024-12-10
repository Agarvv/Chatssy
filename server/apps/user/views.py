
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .UserService import find_all_users

# find all users of the database
@api_view(['GET'])
def find_users(request):
    users = find_all_users()
    return Response({
        "users": users
    })