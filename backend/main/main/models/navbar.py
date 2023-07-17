from django.db import models
from . import Language, Country

class NavBarTab(models.Model):
    name = models.CharField(max_length=120)
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    icon = models.CharField(
            max_length=100,
            blank=True,
            help_text='https://mui.com/material-ui/material-icons/'
            )
    columns = models.SmallIntegerField(blank=True, null=True)
    rows_per_column = models.SmallIntegerField(blank=True, null=True)
    href = models.CharField(max_length=250, blank=True)
    route = models.CharField(max_length=200, blank=True)
    collapse = models.ManyToManyField('NavBarSubTab', blank=True)
    position = models.SmallIntegerField(blank=True, null=True)
    is_staff_only = models.BooleanField(default=False)
    is_user_only = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['position']

    def __str__(self):
        return f'{self.name} (country)'

class NavBarSubTab(models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField( blank=True)
    href = models.CharField(max_length=250, blank=True)
    route = models.CharField(max_length=200, blank=True)
    dropdown = models.BooleanField()
    collapse = models.ManyToManyField('NavBarSubElement', blank=True)
    position = models.SmallIntegerField(blank=True, null=True)

    def __str__(self):
        return f'{self.name}'

class NavBarSubElement(models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField( blank=True)
    href = models.CharField(max_length=250, blank=True)
    route = models.CharField(max_length=200, blank=True)
    position = models.SmallIntegerField(blank=True, null=True)

    def __str__(self):
        return f'{self.name}'

