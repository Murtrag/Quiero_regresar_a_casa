import datetime
from django.db import models
from .choices import (year_choice, hair_colours, hair_length, sex_choice)
from django.core.validators import MinValueValidator, MaxValueValidator 




class MissingPerson(models.Model):

    calling_name = models.CharField(
            max_length=50
            )

    full_name = models.CharField(
            max_length=50
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
            choices=hair_colours
            )

    hair_length =  models.SmallIntegerField(
            choices=hair_length
            )

    eye_colour = models.SmallIntegerField()

    sex = models.CharField(
            max_length = 2,
            choices = sex_choice
            )

    description = models.TextField()

    @property
    def age(self):
        return datetime.date.today().year - self.year_of_birth 
