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

from .models import Profile, NavBarTab, Footer, Motto
from utils.rest_framework import mixins as custom_mixins
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

    def get(self, request, format=None, **kwargs):
        try:
            footer = Footer.objects.get(**kwargs)
                    # language=language,
                    # country=country
                    # )
        except Footer.DoesNotExist:
            return HttpResponse(status=404)

        serializer = FooterSerializer(footer, many=False)
        return JsonResponse(serializer.data)


class MottoView(APIView):
    lookup_field = 'language__country_code'

    def get(self, request, format=None, **kwargs):
        try:
            motto = Motto.objects.get(**kwargs)
        except Motto.DoesNotExist:
            return HttpResponse(status=404)
        serializer = MottoSerializer(motto, many=False)
        return JsonResponse(serializer.data)


class NavBarList(
        mixins.RetrieveModelMixin,
        custom_mixins.MultipleFieldLookupMixin,
        generics.GenericAPIView,
        ):
    queryset = NavBarTab.objects.all()
    serializer_class = TabSerializer
    lookup_fields = ('country__country_code', 'language__country_code',)
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
