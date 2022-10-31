from django.contrib import admin
from . models import Profile 

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
