from django.contrib import admin
from . models import Category, Product, ProductImage

class CategoryAdmin(admin.ModelAdmin):
    ordering = ('name')
    list_display = ('name',)
admin.site.register(Category)

class ProductAdmin(admin.ModelAdmin):
    ordering = ['category', 'name']
    search_fields = ['name']
    list_display = ('name','category_name')

    def category_name(self, obj):
        return obj.category.name

admin.site.register(Product, ProductAdmin)

admin.site.register(ProductImage)
