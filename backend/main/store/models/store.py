from django.db import models
from os import path
from .paths import (product_custom_directory, category_custom_directory)


class Category(models.Model):
    name = models.CharField(max_length=250)
    image = models.ImageField(upload_to=category_custom_directory)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class ProductImage(models.Model):
    product_directory = models.CharField(max_length=100)

    image = models.ImageField(upload_to=product_custom_directory)

    def __str__(self):
        return path.basename(self.image.name)


class Product(models.Model):

    name = models.CharField(max_length=250)

    description = models.TextField()

    image = models.ManyToManyField(ProductImage, blank=True)

    price = models.DecimalField(max_digits=5, decimal_places=2)

    category = models.ForeignKey(Category, on_delete=models.CASCADE)
