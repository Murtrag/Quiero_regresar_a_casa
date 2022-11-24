from rest_framework import serializers
from main.models import Motto

class MottoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Motto
        fields = ('header', 'description',)
        