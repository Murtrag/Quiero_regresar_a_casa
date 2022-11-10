from django.db import models
from main.models import (Country, Language)


class Article(models.Model):
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    title = models.TextField()
    text_html = models.TextField(blank=True)
    text_css = models.TextField(blank=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('title',)

        
