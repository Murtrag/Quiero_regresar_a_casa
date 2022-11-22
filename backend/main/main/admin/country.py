from django.contrib import admin
from main.models import (
        Country,
        Language,
        )


class CountryAdmin(admin.ModelAdmin):
    model = Country
    list_display = ('country_code', 'country_name', 'flag',)
    search_fields = ('country_name','country_code',)
    ordering = ('country_name',)
    
    
admin.site.register(Country, CountryAdmin)

class LanguageyAdmin(admin.ModelAdmin):
    model = Language
    list_display = ('country_code', 'country_name', 'flag',)
    search_fields = ('country_name','country_code',)
    ordering = ('country_name',)
    
admin.site.register(Language, LanguageyAdmin)