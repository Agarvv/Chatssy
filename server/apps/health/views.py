from django.http import JsonResponse 
from django.http import request
# i love Python <3
def check_server_health(request):
    return JsonResponse({
        "message": "Django Server Running!"
    })