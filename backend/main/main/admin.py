from django.contrib import admin
from . models import (
        Profile,
        Country,
        Language,
        Header,
        Link,
        Brand,
        Footer,
        Tab,
        SubTab,
        SubElement
        )


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
    list_display = ('name','href',)
admin.site.register(Link, LinkAdmin)

class BrandAdmin(admin.ModelAdmin):
    list_display = ('name','image','route',)
admin.site.register(Brand, BrandAdmin)

class FooterAdmin(admin.ModelAdmin):
    list_display = ('brand', ) #social, copyright
admin.site.register(Footer, FooterAdmin)

# Tabs
class TabAdmin(admin.ModelAdmin):
    list_display = ('name', 'href' ) #social, copyright
admin.site.register(Tab, TabAdmin)
class SubTabAdmin(admin.ModelAdmin):
    list_display = ('name', 'href' ) #social, copyright
admin.site.register(SubTab, SubTabAdmin)
class SubElementAdmin(admin.ModelAdmin):
    list_display = ('name', 'href' ) #social, copyright
admin.site.register(SubElement, SubElementAdmin)
