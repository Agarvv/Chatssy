import jwt
from datetime import datetime, timedelta
from django.conf import settings

# generates a jwt token using user id, username and email
def generate_jwt(user):
    payload = {
        'id': user.id,
        'username': user.username,
        'email': user.email,
        'exp': datetime.utcnow() + timedelta(days=1),  # one day
        'iat': datetime.utcnow()  
    }

    token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
    return token 

def verify_jwt(token):
    try:
        decoded_token = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        return decoded_token
    except jwt.ExpiredSignatureError:
        raise Exception('JWT has expired...') # just for now
    except jwt.InvalidTokenError:
        raise Exception('Invalid JWT...') # just for now