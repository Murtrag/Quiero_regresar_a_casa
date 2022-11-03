from rest_framework import serializers
from . models import (
ProductImage, 
Product, 
Category
)

class ImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ('image',)

class ProductSerializer(serializers.ModelSerializer):
    images = ImagesSerializer()
    
    class Meta:
        model = Product
        fields = ('name', 'description', 'price', 'images',)


class Category(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name', 'image',)

