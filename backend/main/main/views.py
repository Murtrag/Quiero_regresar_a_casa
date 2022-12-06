from rest_framework import mixins
from rest_framework import generics
from django.http import JsonResponse, HttpResponse
from rest_framework import permissions
from rest_framework.views import APIView
from .serializers import (
    ProfileSerializer,
    FooterSerializer,
    TabSerializer,
    #MenuSerializer,
    MottoSerializer)

from .models import Profile, Tab, Footer, Motto
# from . import custom_permissions


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
    '''
    Returns json for botton part of the website
    *tested
    '''

    def get(self, request, format=None):
        try:
            language =  request.get('language')
            country =  request.get('country')
            footer = Footer.objects.get(
                    language=language,
                    country=country
                    )
        except Footer.DoesNotExist:
            return HttpResponse(status=404)

        serializer = FooterSerializer(footer, many=False)
        return JsonResponse(serializer.data)


class MottoView(APIView):
    lookup_field = 'language_pk'

    def get(self, request, format=None, **kwargs):
        try:
            motto = Motto.objects.get(
                languages__pk=kwargs.get(MottoView.lookup_field))
        except Motto.DoesNotExist:
            return HttpResponse(status=404)
        serializer = MottoSerializer(motto, many=False)
        return JsonResponse(serializer.data)


class NavBarList(
        mixins.ListModelMixin,
        generics.GenericAPIView
        # custom_mixins.MultipleFieldLookupMixin,
        ):
    queryset = Tab.objects.all()
    serializer_class = TabSerializer
    lookup_fields = ['language', 'country']
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
