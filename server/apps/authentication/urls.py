from django.urls import path

from .views import register, login, send_reset_password, reset_password_view, check_if_authenticated

urlpatterns = [
  path('register/', register, name='register'),
  path('login/', login, name='login'),
  path('send_reset_url/', send_reset_password, name="send_reset_password_url"),
  path('reset_password/', reset_password_view, name="reset_password"),
  # check if user is authenticated endpoint 
  path('check/', check_if_authenticated, name="check_if_authenticated")
]