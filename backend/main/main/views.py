<<<<<<< HEAD
from . import custom_permissions
=======
>>>>>>> origin/main
from rest_framework import mixins
from rest_framework import generics
from django.http import JsonResponse
from rest_framework import permissions
<<<<<<< HEAD
from . serializers import ProfileSerializer, FooterSerializer
from . models import Profile, Header

=======
from rest_framework.views import APIView
from . serializers import ProfileSerializer, FooterSerializer #MenuSerializer
from . models import Profile, Header, Footer
from . import custom_permissions
>>>>>>> origin/main

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


<<<<<<< HEAD
class FooterList(mixins.ListModelMixin, generics.GenericAPIView):
    queryset = Header.objects.all()
    serializer_class = FooterSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
=======
# class MenuList(mixins.ListModelMixin, generics.GenericAPIView):
#     queryset = Header.objects.all()
#     serializer_class = MenuSerializer

#     def get(self, request, *args, **kwargs):
#         return self.list(request, *args, **kwargs)

class FooterView(APIView):
    def get(self, request, format=None):
        try:
            footer = Footer.objects.last()
        except Footer.DoesNotExist:
            return HttpResponse(status=404)
        
        serializer = FooterSerializer(footer, many=False)
        return JsonResponse(serializer.data)

>>>>>>> origin/main
