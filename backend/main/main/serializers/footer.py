from rest_framework import serializers
from main.models import Brand, Link, Header, Footer


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
