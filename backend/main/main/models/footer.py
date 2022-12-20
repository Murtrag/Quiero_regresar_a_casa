from django.db import models
from .country import (
    Language,
    Country
)

    

class FooterLink(models.Model):
    name = models.CharField(max_length = 150)
    href = models.CharField(max_length = 500)
    
    def __str__(self):
        return self.name

class FooterHeader(models.Model):
    name = models.CharField(max_length = 150)
    items = models.ManyToManyField(Link)

    def __str__(self):
        return self.name

# class Social(models.Model):
#     icon = 
#     link = models.CharField(max_length = 500)

class FooterBrand(models.Model):
    name = models.CharField(max_length = 150)
    image = models.ImageField()
    route = models.CharField(max_length = 150)

class FooterFooter(models.Model):
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    brand =  models.OneToOneField(Brand, on_delete=models.CASCADE)
    # socials
    menus = models.ManyToManyField(Header)
    # copyright

