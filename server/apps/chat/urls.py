from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ChatViewSet  


router = DefaultRouter()
router.register(r'chats', ChatViewSet)

urlpatterns = router.urls