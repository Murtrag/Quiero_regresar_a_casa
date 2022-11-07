from django.db import models
from uuid import uuid4
from os import path

# def product_custom_path(*args, **kwargs):
#     _, ext = path.splitext(args[1])
#     return f'media/store/product/{args[0].category.name}/{args[0].name}_{str(uuid4())}{ext}'

class Category(models.Model):
    name = models.CharField(
            max_length=250
            )
    image = models.ImageField(
            upload_to="media/store/category",
            )

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


def product_custom_directory(*args, **kwargs):
    name, ext = path.splitext(args[1])
    return f'media/store/product/{args[0].product_directory}/{name}_{str(uuid4())}{ext}'

class ProductImage(models.Model):
    product_directory = models.CharField(
            max_length=100
            )

    image = models.ImageField(
        upload_to = product_custom_directory
    )
    def __str__(self):
        return path.basename(self.image.name) 


class Product(models.Model):

    name = models.CharField(
            max_length=250
            )

    description = models.TextField()

    image = models.ManyToManyField(
        ProductImage,
        blank = True
    )
    
    price = models.DecimalField(
        max_digits=5, 
        decimal_places=2
    )

    category = models.ForeignKey(Category, on_delete=models.CASCADE)


