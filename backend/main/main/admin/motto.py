from django.contrib import admin
from main.models import Motto

class MottoAdmin(admin.ModelAdmin):
    model = Motto
    list_display = ('language', 'header', 'description',)
    ordering = ('language',)
    seach_fields= ('language',)

admin.site.register(Motto, MottoAdmin)
