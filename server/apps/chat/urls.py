from django.urls import path

from .views import create_new_chat 

urlpatterns = [
  path('new/', create_new_chat, name="create_new_chat")
]