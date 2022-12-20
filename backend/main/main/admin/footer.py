from django.contrib import admin
from main.models import (
        FooterHeader,
        FooterLink,
        FooterBrand,
        Footer
        )

class HeaderAdmin(admin.ModelAdmin):
    list_display = ('name',)
    
admin.site.register(FooterHeader, HeaderAdmin)

class LinkAdmin(admin.ModelAdmin):
    list_display = ('name','href',)
admin.site.register(FooterLink, LinkAdmin)

class BrandAdmin(admin.ModelAdmin):
    list_display = ('name','image','route',)
admin.site.register(FooterBrand, BrandAdmin)

class FooterAdmin(admin.ModelAdmin):
    list_display = ('brand', ) #social, copyright
admin.site.register(Footer, FooterAdmin)


