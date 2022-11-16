from . models import Profile
from . import custom_permissions
from rest_framework import mixins
from rest_framework import generics
from rest_framework import permissions
from . serializers import ProfileSerializer


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

class FooterList(mixins.ListModelMixin,
                  generics.GenericAPIView):
    queryset = Footer.objects.all()
    serializer_class = FooterSerialize

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)