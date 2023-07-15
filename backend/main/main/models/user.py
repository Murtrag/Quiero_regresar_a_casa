from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from phonenumber_field.modelfields import PhoneNumberField
from django.core.validators import MaxLengthValidator




class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_number = PhoneNumberField(blank=True)
    internal_currency = models.DecimalField(default=0,
                                            max_digits=5,
                                            decimal_places=2)
    address = models.CharField(max_length=512, blank=True)
    city = models.CharField(max_length=255, blank=True)
    country = models.CharField(max_length=255, blank=True)
    postal_code = models.CharField(max_length=10, blank=True)
    profile_description = models.TextField(validators=[MaxLengthValidator(2000)], blank=True)

    def __str__(self):
        return f'{self.user.pk}: {self.user.username}'


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
