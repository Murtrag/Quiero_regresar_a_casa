from . models import MissingPerson, Image
from rest_framework import serializers

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ("image",)

class MissingPersonSerializer(serializers.HyperlinkedModelSerializer):
    images = ImageSerializer(many=True, required=False)
    # images = serializers.HyperlinkedIdentityField(view_name='test')
    owner = serializers.ReadOnlyField(source="owner.username")

    class Meta:
        model = MissingPerson
        fields = (
                "id",
                "owner",
                "origin",
                "calling_name",
                "full_name",
                "year_of_birth",
                "length",
                "hair_colour",
                "hair_length",
                "eye_colour",
                "sex",
                "description",
                "images", 
                )
