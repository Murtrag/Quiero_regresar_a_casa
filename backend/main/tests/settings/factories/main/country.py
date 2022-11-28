import factory
from faker import Faker

# Model imports
from main.models import Country, Language

faker = Faker()

class LanguageFactory(factory.django.DjangoModelFactory):
    country_code = faker.country_code()
    country_name = faker.country()
    active = True
    flag = "asdf"

    class Meta:
        model = Language

class CountryFactory(factory.django.DjangoModelFactory):
    country_code = faker.country_code()
    country_name = faker.country()
    active = True
    flag = "asdf"

    class Meta:
        model = Language
    