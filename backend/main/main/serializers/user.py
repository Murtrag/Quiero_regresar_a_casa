from rest_framework import serializers
from django.contrib.auth.models import User
from main.models import Brand, Link, Header, Footer, Profile

class UserSerializer(serializers.HyperlinkedModelSerializer):
    username = serializers.ReadOnlyField()
    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name', 'password',)

class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    
    internal_currency = serializers.ReadOnlyField()
    user = UserSerializer()

    class Meta:
        model = Profile
        fields = ('user', 'phone_number', 'internal_currency',)


