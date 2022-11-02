from rest_framework import generics
from rest_framework import permissions
from rest_framework import mixins
from . import custom_permissions
from . serializers import ProfileSerializer
from . models import Profile
from rest_framework import status
from rest_framework.response import Response


class ProfileList(mixins.ListModelMixin,
                  generics.GenericAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [
            # custom_permissions.IsOwnerOrReadOnly
            ]
