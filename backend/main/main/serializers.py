from .models import Profile, Header, Link, Brand, Footer
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

class BrandSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Brand
        fields = ('name','image', 'route',)

class LinkSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Link
        fields = ('name', 'href',)
        
class MenuSerializer(serializers.ModelSerializer):
    items = LinkSerializer(read_only=False, many=True)
    class Meta:
        model = Header
        fields = ('name','items' )

class FooterSerializer(serializers.HyperlinkedModelSerializer):
    brand = BrandSerializer(read_only=True, many=False)
    menus = MenuSerializer(read_only=True, many=True)
    class Meta:
        model = Footer
        fields = ('brand','menus',)


