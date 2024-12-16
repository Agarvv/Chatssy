from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action

from .models import User 
from .serializers.UserSerializer import UserSerializer
from .serializers.UserDetailsSerializer import UserDetailsSerializer
from .serializers.UpdatePictureSerializer import UpdatePictureSerializer 
from .serializers.UpdateBioSerializer import UpdateBioSerializer 
from .serializers.UpdateBannerSerializer import UpdateBannerSerializer 
from apps.util.AuthOutil import get_authenticated_user


from .userService import find_all_users, update_user_field

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
        serializer = UserSerializer(user)  
        return Response({"profile": serializer.data})
        
    # find all users 
    def list(self, request):
       serializer = UserSerializer(self.queryset, many=True)  
       return Response({"users": serializer.data})

    @action(detail=True, methods=['PUT'])
    def update_profile_picture(self, request):
        serializer = UpdatePictureSerializer(data=request.data)
        if serializer.is_valid():
            user = get_authenticated_user()
            update_user_field('profilePicture', serializer.validated_data['picture'], user)
            return Response({
                "message": "profile pic update success"
            })
            
        
        
        return Response({
            "message": "data not valid"
        })
        
        

    @action(detail=True, methods=['POST'])
    def update_bio(self, request):
        serializer = UpdateBioSerializer(data=request.data)
        if serializer.is_valid():
            user = get_authenticated_user()
            update_user_field('profilePicture', serializer.validated_data['picture'], user)
            return Response({
                "message": "BIO update success"
            })
        
        return Response({
            "error": "data not valid"
        })
        

    @action(detail=True, methods=['POST'])
    def update_banner(self, request):
        serializer = UpdateBannerSerializer(data=request.data)
        if serializer.is_valid():
            user = get_authenticated_user()
            update_user_field('profilePicture', serializer.validated_data['picture'], user)
            return Response({
                "message": "Profile Banner update success"
            })
        
        return Response({
            "message": "data not valid"
        })
        
