from django.contrib import admin
from .models import Article


class ArticleAdmin(admin.ModelAdmin):

    class Meta:
        model = Article
        fields = (
            'language',
            'country',
        )


admin.site.register(Article, ArticleAdmin)
