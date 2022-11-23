from rest_framework import mixins
from rest_framework import generics
from django.http import JsonResponse
from rest_framework import permissions
from rest_framework.views import APIView
from . serializers import ProfileSerializer, FooterSerializer, TabSerializer #MenuSerializer
from . models import Profile, Tab, Footer
from . import custom_permissions


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

class FooterView(APIView):
    def get(self, request, format=None):
        try:
            footer = Footer.objects.last()
        except Footer.DoesNotExist:
            return HttpResponse(status=404)
        
        serializer = FooterSerializer(footer, many=False)
        return JsonResponse(serializer.data)


class NavBarList(mixins.ListModelMixin, generics.GenericAPIView):
    queryset = Tab.objects.all()
    serializer_class = TabSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


