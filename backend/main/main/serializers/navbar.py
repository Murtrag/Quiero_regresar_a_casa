from rest_framework import serializers
from main.models import (NavBarTab, NavBarSubTab, NavBarSubElement)
from utils.rest_framework.serializers import NonEmptySerializer



class SubElementSerializer(NonEmptySerializer):
    class Meta:
        model = NavBarSubElement
        fields = ('name', 'description','route', 'href',)

class SubTabSerializer(NonEmptySerializer):
    collapse = SubElementSerializer(read_only=True, many=True)
    class Meta:
        model = NavBarSubTab
        fields = ('name', 'description','route', 'href','dropdown', 'collapse', )

class TabSerializer(NonEmptySerializer):
    rowsPerColumn = serializers.IntegerField(source = 'rows_per_column')
    collapse = SubTabSerializer(read_only=True, many=True)
    class Meta:
        model = NavBarTab
        fields = ('name', 'icon', 'columns', 'rowsPerColumn','route', 'href', 'collapse',)
