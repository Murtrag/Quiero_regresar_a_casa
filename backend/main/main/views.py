from django.db.models import Q
from rest_framework import mixins
from rest_framework import generics
from django.http import JsonResponse, HttpResponse
from rest_framework import permissions
from rest_framework_simplejwt.authentication import JWTAuthentication
# from rest_framework_simplejwt.tokens import AccessToken
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from rest_framework import status
from rest_framework.views import APIView
from .serializers import (
    ProfileSerializer,
    UserSerializer,
    FooterSerializer,
    TabSerializer,
    #MenuSerializer,
    MottoSerializer)

from .models import Profile, NavBarTab, Footer, Motto
from utils.rest_framework import mixins as custom_mixins
# from . import custom_permissions
class LogoutView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = [JWTAuthentication]

    def post(self, request):
        refresh_token = request.data["refresh_token"]
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response(status=status.HTTP_205_RESET_CONTENT)
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class SignUp(APIView):
    '''
    Api to create user
    '''
    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                return Response(
                        serializer.data,
                        status=status.HTTP_201_CREATED
                        )
        # return Response(status=status.HTTP_205_RESET_CONTENT))
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class ProfileList(mixins.ListModelMixin, generics.GenericAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class ProfileDetail(mixins.RetrieveModelMixin, generics.GenericAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = [JWTAuthentication]

    def get_object(self):
        user = self.request.user
        profile = Profile.objects.get(user=user)
        return profile

    def patch(self, request, *args, **kwargs):
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

    def get_queryset(self):
        user = self.request.user
        queryset = super().get_queryset()

        if user.is_anonymous:
            return queryset.exclude(is_staff_only=True, is_user_only=True)

        if user.is_authenticated:
            return queryset.exclude(is_staff_only=True)

        if user.is_staff:
            return queryset


    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
