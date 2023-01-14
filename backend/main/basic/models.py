from django.db import models
from django.urls import reverse
from main.models import (Country, Language)

from django.template.defaultfilters import slugify


class Article(models.Model):
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    title = models.TextField()
    text_html = models.TextField(blank=True)
    text_css = models.TextField(blank=True)

    group_pk = models.SmallIntegerField(help_text="Same article in different language/country should have the same group_pk")
    category = models.CharField(blank=True, max_length=150)

    @property
    def url(self):
         return f'article/{self.language.pk}/{self.country.pk}/{self.pk}/'
         # return reverse('detail_article', kwargs={
         #    'language': self.language.pk,
         #    'country': self.country.pk,
         #    'pk': self.pk
         #    })

    def __str__(self):
        return self.title

        
