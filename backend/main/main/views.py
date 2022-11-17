from . import custom_permissions
from rest_framework import mixins
from rest_framework import generics
from rest_framework import permissions
from . serializers import ProfileSerializer, FooterSerializer
from . models import Profile, Header


class ProfileList(mixins.ListModelMixin, generics.GenericAPIView):
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


class FooterList(mixins.ListModelMixin, generics.GenericAPIView):
    queryset = Header.objects.all()
    serializer_class = FooterSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
