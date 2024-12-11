from .models import Group
from .serializers.GroupSerializer import GroupSerializer


def find_all_groups():
    groups = Group.objects.all()
    serializer = GroupSerializer(groups, many=True)
    return serializer.data
