from django.db import models

    
class Header(models.Model):
    name = models.CharField(max_length = 150)
    items = models.ManyToManyField("link")

    def __str__(self):
        return self.name

class Link(models.Model):
    name = models.CharField(max_length = 150)
    href = models.CharField(max_length = 500)
    
    def __str__(self):
        return self.name


# class Social(models.Model):
#     icon = 
#     link = models.CharField(max_length = 500)

class Brand(models.Model):
    name = models.CharField(max_length = 150)
    image = models.ImageField()
    route = models.CharField(max_length = 150)

class Footer(models.Model):
    brand =  models.OneToOneField(Brand, on_delete=models.CASCADE)
    # socials
    menus = models.ManyToManyField(Header)
    # copyright

