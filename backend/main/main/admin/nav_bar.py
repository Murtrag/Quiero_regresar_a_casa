from django.contrib import admin
from django import forms
from django.db import models
from main.models import (
        Tab,
        SubTab,
        SubElement
        )
from utils.forms.widgets import HrefWidget
from basic.models import Article


class HrefForm(forms.ModelForm):
    class Meta:
        model = SubElement
        widgets = {
                'href': HrefWidget(related_objects=(
                    Article,
                    )),
                }
        fields = '__all__'

class TabAdmin(admin.ModelAdmin):
    list_display = ('name', 'href' ) #social, copyright
admin.site.register(Tab, TabAdmin)

class SubTabAdmin(admin.ModelAdmin):
    list_display = ('name', 'href' ) #social, copyright
admin.site.register(SubTab, SubTabAdmin)

class SubElementAdmin(admin.ModelAdmin):
    form = HrefForm
    # list_display = ('name', 'href' ) #social, copyright
    # def formfield_for_dbfield(self, db_field, **kwargs):
    #     print('test?')
    #     if db_field.name == 'Href':
    #         kwargs['widget'] = HrefWidget
    #     return super(VehicleAdmin, self).formfield_for_dbfield(db_field,**kwargs)
admin.site.register(SubElement, SubElementAdmin)
