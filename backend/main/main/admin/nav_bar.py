from django.contrib import admin
from django import forms
from django.db import models
from main.models import (
        NavBarTab,
        NavBarSubTab,
        NavBarSubElement
        )
from utils.forms.widgets import HrefWidget
from basic.models import Article


# class HrefForm(forms.ModelForm):
#     class Meta:
#         widgets = {
#                 'route': HrefWidget(related_objects=(
#                     Article,
#                     )),
#                 }
#         fields = '__all__'

class TabAdmin(admin.ModelAdmin):
    # form = HrefForm
    list_display = ('name', 'country', 'language', 'position', )
    list_filter = ('country', 'language', 'position')
admin.site.register(NavBarTab, TabAdmin)

class SubTabAdmin(admin.ModelAdmin):
    # form = HrefForm
    list_display = ('name', 'href', 'position', )
    list_filter = ('position',)
admin.site.register(NavBarSubTab, SubTabAdmin)

class SubElementAdmin(admin.ModelAdmin):
    # form = HrefForm
    list_display = ('name', 'position', ) 
    list_filter = ('position',)
admin.site.register(NavBarSubElement, SubElementAdmin)
