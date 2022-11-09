from django.contrib import admin
from .models import Article


class ArticleAdmin(admin.ModelAdmin):
    model = Article
    list_display = (
            'title',
            'language',
            'country',
        )


admin.site.register(Article, ArticleAdmin)
