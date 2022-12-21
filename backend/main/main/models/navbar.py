from django.db import models

class NavBarTab(models.Model):
    name = models.CharField(max_length=35)
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
    
    def __str__(self):
        return f'{self.name} (country)'

class NavBarSubTab(models.Model):
    name = models.CharField(max_length=35)
    description = models.CharField(max_length=100, blank=True)
    href = models.CharField(max_length=250, blank=True)
    route = models.CharField(max_length=200, blank=True)
    dropdown = models.BooleanField()
    collapse = models.ManyToManyField('NavBarSubElement', blank=True)

    def __str__(self):
        return f'{self.name}'

class NavBarSubElement(models.Model):
    name = models.CharField(max_length=35)
    description = models.CharField(max_length=100, blank=True)
    href = models.CharField(max_length=250, blank=True)
    route = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return f'{self.name}'

