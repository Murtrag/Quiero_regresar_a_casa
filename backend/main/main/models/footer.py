from django.db import models
from .country import (
    Country
    Language,
)

    

class FooterLink(models.Model):
    name = models.CharField(max_length = 150)
    href = models.CharField(max_length = 500)
    
    def __str__(self):
        return self.name

class FooterHeader(models.Model):
    name = models.CharField(max_length = 150)
    items = models.ManyToManyField(FooterLink)

    def __str__(self):
        return self.name

# class Social(models.Model):
#     icon = 
#     link = models.CharField(max_length = 500)

class FooterBrand(models.Model):
    name = models.CharField(max_length = 150)
    image = models.ImageField()
    route = models.CharField(max_length = 150)

class Footer(models.Model):
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    brand =  models.OneToOneField(FooterBrand, on_delete=models.CASCADE)
    # socials
    menus = models.ManyToManyField(FooterHeader)
    # copyright

