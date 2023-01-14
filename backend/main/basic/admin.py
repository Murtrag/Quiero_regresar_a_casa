from django.contrib import admin
from .models import Article


class ArticleAdmin(admin.ModelAdmin):
    model = Article
    list_display = (
            'title',
            'language',
            'country',
            'group_pk',
            'category',
        )
    radio_fields = {
        "language": admin.VERTICAL,
        "country": admin.VERTICAL
    }
    ordering = ('country', 'language','category', 'title',)
    search_fields = ('title',)
    list_filter = ('group_pk', 'country', 'language',)


admin.site.register(Article, ArticleAdmin)
