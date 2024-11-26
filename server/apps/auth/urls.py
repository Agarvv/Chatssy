from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse

@api_view(["POST"])

def register(request):
    return JsonResponse({
        "DATA": "SOON"
    })

def login(request):
    return JsonResponse({
        "DATA": "SOON"
    })

