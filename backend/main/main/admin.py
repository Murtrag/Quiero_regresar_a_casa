from django.contrib import admin
from . models import (Profile, Country, Language, Header, Link)


class ProfileAdmin(admin.ModelAdmin):
    ordering = ['user']
    # radio_fields = {"sex": admin.VERTICAL}
    search_fields = ['first_name', 'last_name', 'phone_number']
    list_display = ('user', 'email_address', 'first_name', 'last_name', 'phone_number')
    # list_filter = ('origin',)
    def email_address(self, obj):
        return obj.user.email
    def first_name(self, obj):
        return obj.user.first_name
    def last_name(self, obj):
        return obj.user.last_name

admin.site.register(Profile, ProfileAdmin)

class CountryAdmin(admin.ModelAdmin):
    model = Country
    list_display = ('country_code', 'country_name', 'flag',)
    search_fields = ('country_name','country_code',)
    ordering = ('country_name',)
    
    
admin.site.register(Country, CountryAdmin)

class LanguageyAdmin(admin.ModelAdmin):
    model = Country
    list_display = ('country_code', 'country_name', 'flag',)
    search_fields = ('country_name','country_code',)
    ordering = ('country_name',)
    
admin.site.register(Language, LanguageyAdmin)

class HeaderAdmin(admin.ModelAdmin):
    list_display = ('name',)
    
admin.site.register(Header, HeaderAdmin)

class LinkAdmin(admin.ModelAdmin):
    list_display = ('name','url',)
admin.site.register(Link, LinkAdmin)
