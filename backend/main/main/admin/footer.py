from django.contrib import admin
from main.models import (
        Header,
        Link,
        Brand,
        Footer
        )

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


