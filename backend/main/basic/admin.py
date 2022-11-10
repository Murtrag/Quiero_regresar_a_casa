from django.contrib import admin
from .models import Article


class ArticleAdmin(admin.ModelAdmin):
    model = Article
    list_display = (
            'title',
            'language',
            'country',
        )
    radio_fields = {
        "language": admin.VERTICAL,
        "country": admin.VERTICAL
    }
    ordering = ('country', 'title', 'language',)
    search_fields = ('title',)
    list_filter = ('country','language',)


admin.site.register(Article, ArticleAdmin)
