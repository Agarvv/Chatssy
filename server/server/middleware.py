# from django.http import JsonResponse
# from django.utils.deprecation import MiddlewareMixin
# import traceback
from rest_framework.views import exception_handler

# class ExceptionHandlerMiddleware(MiddlewareMixin):
#     def process_exception(self, request, exception):  
#         # error_msg = str(exception)
#         # code = getattr(exception, 'code', 500)
        
#         # response = {
#         #     "error": error_msg, 
#         #     "code": code         
#         # }
        
#         # return JsonResponse(response, status=code)


def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)
    if response is not None:
        if isinstance(response.data, dict) and 'detail' in response.data:
            response.data = {'error': response.data['detail']}
    return response
