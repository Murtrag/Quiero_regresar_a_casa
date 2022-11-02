from .models import Profile
from rest_framework import serializers
from django.contrib.auth.models import User



class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email')

class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    user = UserSerializer(required=True)
    class Meta:
        model = Profile
        fields = ['phone_number', 'internal_currency', 'user']


