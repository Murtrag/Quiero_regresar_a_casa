from django.db import models
from django.urls import reverse_lazy
from main.models import (Country, Language)

from django.template.defaultfilters import slugify


class Article(models.Model):
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    title = models.TextField()
    text_html = models.TextField(blank=True)
    text_css = models.TextField(blank=True)

    url_title = models.TextField(editable=False)

    @property
    def url(self):
        return reverse_lazy('article_detail' kwargs={
            'language': self.language,
            'country': self.country,
            'pk': self.pk
            })
        pass

    def save(self, *args, **kwargs):
        self.url_title = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


    class Meta:
        ordering = ('title',)

        
