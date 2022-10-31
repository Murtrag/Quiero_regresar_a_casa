from django.contrib import admin
from . models import MissingPerson, Image

admin.site.register(Image)

class MissingPersonAdmin(admin.ModelAdmin):
    ordering = ['origin', 'full_name']
    radio_fields = {"sex": admin.VERTICAL}
    search_fields = ['full_name', 'calling_name', 'origin']
    list_display = ('full_name','origin', 'age', 'sex')
    list_filter = ('origin',)

admin.site.register(MissingPerson, MissingPersonAdmin)
