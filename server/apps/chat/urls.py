from django.urls import path
from .views import ChatApiView

urlpatterns = [
    path('chats/', ChatApiView.as_view(), name='chats'),
]