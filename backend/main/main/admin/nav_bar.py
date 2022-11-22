from django.contrib import admin
from main.models import (
        Tab,
        SubTab,
        SubElement
        )


class TabAdmin(admin.ModelAdmin):
    list_display = ('name', 'href' ) #social, copyright
admin.site.register(Tab, TabAdmin)
class SubTabAdmin(admin.ModelAdmin):
    list_display = ('name', 'href' ) #social, copyright
admin.site.register(SubTab, SubTabAdmin)
class SubElementAdmin(admin.ModelAdmin):
    list_display = ('name', 'href' ) #social, copyright
admin.site.register(SubElement, SubElementAdmin)