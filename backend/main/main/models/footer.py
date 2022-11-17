from django.db import models

class Header(models.Model):
    name = models.CharField(max_length = 150)
    links = models.ManyToManyField("link")

    def __str__(self):
        return self.name

class Link(models.Model):
    name = models.CharField(max_length = 150)
    url = models.CharField(max_length = 500)
    
    def __str__(self):
        return self.name
