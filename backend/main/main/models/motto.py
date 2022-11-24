from django.db import models
from .country import Language


class Motto(models.Model):
    languages = models.ForeignKey(Language, on_delete=models.CASCADE)

    header = models.CharField(max_length=250)
    description = models.TextField()

    def __str__(self):
        return self.header
