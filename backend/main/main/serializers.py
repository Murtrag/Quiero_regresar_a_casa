from .models import Profile
from rest_framework import serializers
from django.contrib.auth.models import User



class UserSerializer(serializers.HyperlinkedModelSerializer):
    username = serializers.ReadOnlyField()
    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name', 'password')

class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    
    internal_currency = serializers.ReadOnlyField()
    user = UserSerializer()

    class Meta:
        model = Profile
        fields = ['user', 'phone_number', 'internal_currency']
    # def update(self, *args, **kwargs):
    #     print(args)
    #     print(kwargs)


