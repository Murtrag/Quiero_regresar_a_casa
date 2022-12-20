from rest_framework import serializers
from main.models import FooterBrand, FooterLink, FooterHeader, Footer


class BrandSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FooterBrand
        fields = ('name','image', 'route',)

class LinkSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FooterLink
        fields = ('name', 'href',)
        
class MenuSerializer(serializers.ModelSerializer):
    items = LinkSerializer(read_only=False, many=True)
    class Meta:
        model = FooterHeader
        fields = ('name','items' )

class FooterSerializer(serializers.HyperlinkedModelSerializer):
    brand = BrandSerializer(read_only=True, many=False)
    menus = MenuSerializer(read_only=True, many=True)
    class Meta:
        model = Footer
        fields = ('brand','menus',)
