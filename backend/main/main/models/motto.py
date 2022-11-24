from django.db import models


class Motto(models.Model):
    header = models.CharField(max_length=250)
    description = models.TextField()

    def __str__(self):
        return self.header

    
    