from django.urls import path

from .views import find_users

urlpatterns = [
  path('users/', find_users, name="find_all_users"),
]