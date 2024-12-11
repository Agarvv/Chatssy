from apps.user.models import User 

from apps.util.JwtUtil import verify_jwt 

def get_authenticated_user_id(jwt):
    decoded = verify_jwt(jwt)
    if not decoded:
        raise Exception('Something is wrong with the user session...')
    return decoded.id  # user id 

def get_authenticated_user(jwt):
    user_id = get_authenticated_user_id(jwt)
    if not user_id:
        raise Exception('user id cannot be null.')
    user = User.objects.get(id=user_id)
    return user