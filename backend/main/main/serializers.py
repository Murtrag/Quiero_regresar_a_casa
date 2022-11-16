from .models import Profile, Header, Link
from rest_framework import serializers
from django.contrib.auth.models import User


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

class LinkSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Link
        fields = '__all__'
        
class FooterSerializer(serializers.HyperlinkedModelSerializer):
    links = LinkSerializer(queryset=Link.objects.all())
    class Meta:
        model = Header
        fields = '__all__'
