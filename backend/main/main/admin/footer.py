from django.contrib import admin
from main.models import (
        NavBarHeader,
        NavBarLink,
        NavBarBrand,
        NavBarFooter
        )

class HeaderAdmin(admin.ModelAdmin):
    list_display = ('name',)
    
admin.site.register(NavBarHeader, HeaderAdmin)

class LinkAdmin(admin.ModelAdmin):
    list_display = ('name','href',)
admin.site.register(NavBarLink, LinkAdmin)

class BrandAdmin(admin.ModelAdmin):
    list_display = ('name','image','route',)
admin.site.register(NavBarBrand, BrandAdmin)

class FooterAdmin(admin.ModelAdmin):
    list_display = ('brand', ) #social, copyright
admin.site.register(NavBarFooter, FooterAdmin)


