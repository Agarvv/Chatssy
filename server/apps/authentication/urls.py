from django.urls import path
from .views import AuthViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'auth', AuthViewSet)

urlpatterns = router.urls