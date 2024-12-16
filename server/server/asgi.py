import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from apps.middleware.JwtMiddleware import JWTAuthMiddleware
import apps.chat.websocket. routing  


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'server.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": JWTAuthMiddleware( 
        URLRouter(
            apps.server.routing.websocket_urlpatterns
        )
    ),
})
 