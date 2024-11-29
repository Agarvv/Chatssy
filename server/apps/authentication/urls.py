from django.urls import path

from .views import register, login, sendResetUrl, resetPassword

urlpatterns = [
  path('register/', register, name='register'),
  path('login/', login, name='login'),
  path('send_reset_url/', sendResetUrl, name="send_reset_password_url"),
  path('reset_password', )
]