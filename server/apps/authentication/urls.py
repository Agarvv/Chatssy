from django.urls import path

from .views import register, login, send_reset_password, reset_password

urlpatterns = [
  path('register/', register, name='register'),
  path('login/', login, name='login'),
  path('send_reset_url/', send_reset_password, name="send_reset_password_url"),
  path('reset_password/', reset_password, name="reset_password")
]