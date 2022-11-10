from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from phonenumber_field.modelfields import PhoneNumberField


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


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_number = PhoneNumberField(blank=True)
    internal_currency = models.DecimalField(default=0,
                                            max_digits=5,
                                            decimal_places=2)

    # class Meta:
    #     app_label = 'Authentication and Authorization'

    def __str__(self):
        return f'{self.user.pk}: {self.user.username}'


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
