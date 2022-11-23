from rest_framework import serializers
from main.models import (Tab, SubTab, SubElement)
from utils.rest_framework.serializers import NonEmptySerializer



class SubElementSerializer(NonEmptySerializer):
    class Meta:
        model = SubElement
        fields = ('name', 'description','route', 'href',)

class SubTabSerializer(NonEmptySerializer):
    collapse = SubElementSerializer(read_only=True, many=True)
    class Meta:
        model = SubTab
        fields = ('name', 'description','route', 'href','dropdown', 'collapse', )

class TabSerializer(NonEmptySerializer):
    rowsPerColumn = serializers.IntegerField(source = 'rows_per_column')
    collapse = SubTabSerializer(read_only=True, many=True)
    class Meta:
        model = Tab
        fields = ('name', 'icon', 'columns', 'rowsPerColumn','route', 'href', 'collapse',)
