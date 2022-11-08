from django.db import models
from main.models import (Country, Language)


class Article(models.Model):
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    text_html = models.TextField()
    text_css = models.TextField()
