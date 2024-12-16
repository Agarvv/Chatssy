import jwt
from django.conf import settings
from django.contrib.auth.models import AnonymousUser
from channels.middleware import BaseMiddleware
from asgiref.sync import sync_to_async
from apps.user.models import User 

@sync_to_async
def get_user(user_id):
    try:
        return User.objects.get(id=user_id)
    except User.DoesNotExist:
        return AnonymousUser()

class JWTAuthMiddleware(BaseMiddleware):
    async def __call__(self, scope, receive, send):
        headers = dict(scope["headers"])
        token = None

        if b"authorization" in headers:
            auth_header = headers[b"authorization"].decode("utf-8")
            if auth_header.startswith("Bearer "):
                token = auth_header.split("Bearer ")[1]
        elif b"cookie" in headers:
            cookies = headers[b"cookie"].decode("utf-8")
            token = {key.strip(): value.strip() for key, value in [cookie.split("=") for cookie in cookies.split(";")]}\
                .get("access_token")

        if not token:
            raise Exception('JWT token not found')

        try:
            decoded = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
            scope["user"] = await get_user(decoded.get("user_id"))
        except jwt.ExpiredSignatureError:
            raise Exception('JWT token expired')
        except jwt.InvalidTokenError:
            raise Exception('Invalid JWT token')
            

        return await super().__call__(scope, receive, send)
