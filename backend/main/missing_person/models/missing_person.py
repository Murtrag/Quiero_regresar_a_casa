import datetime
from os import path
from django.db import models
from .choices import (
        year_choice,
        hair_colors,
        hair_length,
        sex_choice,
        eye_color
                      )
from django.core.validators import MinValueValidator, MaxValueValidator 
from paths import image_custom_path




class Image(models.Model):
    image = models.ImageField(
            upload_to = image_custom_path
            )

    def __str__(self):
        return path.basename(self.image.name)
    
class MissingPerson(models.Model):

    owner = models.ForeignKey('auth.User', related_name='snippets', on_delete=models.CASCADE)

    origin = models.CharField(
            max_length=150
            )
    calling_name = models.CharField(
            max_length=50
            )

    full_name = models.CharField(
            max_length=150
            )

    year_of_birth = models.IntegerField(
            choices=year_choice
            )

    length = models.IntegerField(
            validators = [
                MinValueValidator(60, "The person cant be that small"),
                MaxValueValidator(272, "Is he the biggest person in the world??")
                ]
            )

    hair_colour = models.SmallIntegerField(
            choices= hair_colors
            )

    hair_length =  models.SmallIntegerField(
            choices= hair_length
            )

    eye_colour = models.SmallIntegerField(
            choices = eye_color
            )

    sex = models.CharField(
            max_length = 2,
            choices = sex_choice
            )
    
    distinguishing_marks = models.TextField()
    
    description = models.TextField()
    
    images = models.ManyToManyField(
            Image,
            blank = True
            )
    
    is_founded = models.BooleanField(
            default = False
            )
    
    is_active = models.BooleanField(
            default = False,
            )
    
    create_date = models.DateTimeField(auto_now_add=True)
    # znaki szczegolne
    # gdzie ostatnio widziany

    

    @property
    def age(self):
        return datetime.date.today().year - self.year_of_birth 
