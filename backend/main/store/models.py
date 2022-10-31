from django.db import models
from uuid import uuid4
from os import path

def product_custom_path(*args, **kwargs):
    _, ext = path.splitext(args[1])
    return f'store/product/{args[0].category.name}/{args[0].name}_{str(uuid4())}{ext}'

class Category(models.Model):
    name = models.CharField(
            max_length=250
            )
    image = models.ImageField(
            upload_to="store/category",
            )

    class Meta:
        ordering = ['name']

class Product(models.Model):

    name = models.CharField(
            max_length=250
            )

    description = models.TextField()

    image = models.ImageField(
            upload_to=product_custom_path
    )

    category = models.ForeignKey(Category, on_delete=models.CASCADE)


