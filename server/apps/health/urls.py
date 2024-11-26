
from django.urls import path
from .views import check_server_health  

urlpatterns = [
  path('health/', check_server_health, name='health_check'),
]