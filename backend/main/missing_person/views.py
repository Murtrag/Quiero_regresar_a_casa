from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import generics
from rest_framework import permissions
from rest_framework import mixins
from main import custom_permissions
from . serializers import MissingPersonSerializer
from . models import MissingPerson
from rest_framework import status
from rest_framework.response import Response


# class MissingPersonViewSet(viewsets.ModelViewSet):

#     queryset = MissingPerson.objects.filter(
#                 is_founded=False,
#                 is_active=True
#             )
#     serializer_class = MissingPersonSerializer
#     permission_classes = [
#             permissions.IsAuthenticatedOrReadOnly,
#             # custom_permissions.IsOwnerOrReadOnly
#             ]

#     def perform_create(self, serializer):
#         serializer.save(owner=self.request.user)

class MissingPersonList(mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  generics.GenericAPIView):
    queryset = MissingPerson.objects.filter(
        is_founded=False,
        is_active=True
    )
    serializer_class = MissingPersonSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly,
    ]

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class MissingPersonDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = MissingPerson.objects.all()
    serializer_class = MissingPersonSerializer
    permission_classes = [
            custom_permissions.IsOwnerOrReadOnly
            ]
    authentication_classes = [JWTAuthentication]

    def get_object(self):
        user = self.request.user
        profile = Profile.objects.get(user=user)
        return profile

    def put(self, request, *args, **kwargs): # Should be put in my case
        profile = self.get_object()
        serializer = self.get_serializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                
    def get(self, request, *args, **kwargs):
        profile = self.get_object()
        serializer = ProfileSerializer(instance=profile)
        return Response( serializer.data )
   



# class ProfileDetail(mixins.RetrieveModelMixin, generics.GenericAPIView):
#     queryset = Profile.objects.all()
#     serializer_class = ProfileSerializer
#     permission_classes = (permissions.IsAuthenticated,)
#     authentication_classes = [JWTAuthentication]

#     def get_object(self):
#         user = self.request.user
#         profile = Profile.objects.get(user=user)
#         return profile

#     def patch(self, request, *args, **kwargs): # Should be put in my case
#         profile = self.get_object()
#         serializer = self.get_serializer(profile, data=request.data, partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                
#     def get(self, request, *args, **kwargs):
#         profile = self.get_object()
#         serializer = ProfileSerializer(instance=profile)
#         return Response( serializer.data )








