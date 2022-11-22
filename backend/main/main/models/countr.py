from django.db import models

class Country(models.Model):
    country_code = models.CharField(max_length=5)
    country_name = models.CharField(max_length=80)
    active = models.BooleanField()
    flag = models.CharField(max_length=10,
                            help_text='https://emojipedia.org/flags/')

    def __str__(self):
        return f'{self.country_code} {self.flag} '


class Language(models.Model):
    country_code = models.CharField(max_length=5)
    country_name = models.CharField(max_length=80)
    active = models.BooleanField()
    flag = models.CharField(max_length=10,
                            help_text='https://emojipedia.org/flags/')

    def __str__(self):
        return f'{self.country_code} {self.flag} '
