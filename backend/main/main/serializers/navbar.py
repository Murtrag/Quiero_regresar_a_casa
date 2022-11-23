from rest_framework import serializers
from main.models import (Tab, SubTab, SubElement)

class Tab(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tab
        fields = ('name', 'icon', 'columns', 'rows_per_column', 'href', 'collapse',)

class SubTab(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SubTab
        fields = ('name', 'description', 'href', 'collapse', 'dropdown', 'collapse',)

class SubElement(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SubElement
        fields = ('name', 'description', 'href',)
