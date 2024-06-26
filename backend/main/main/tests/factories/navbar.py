import factory
import random
from faker import Faker

# Model imports
from main.models import (
        NavBarTab,
        NavBarSubTab,
        NavBarSubElement,
        )

# Facotry imports
from .country import (
        LanguageFactory,
        CountryFactory
        )

fake = Faker()


class TabFactory(factory.django.DjangoModelFactory):
    # fields
    name = fake.word()
    language = factory.SubFactory(LanguageFactory)
    country = factory.SubFactory(CountryFactory)
    icon = fake.word()
    columns = random.randint(0, 9)
    rows_per_column = random.randint(0, 9)
    href = fake.url()
    route = fake.url() # Not sure if its as url
    # collapse = 
    class Meta:
        model = NavBarTab

    @factory.post_generation
    def collapse(self, create, extracted, **kwargs):
        if not create:
            return
        if extracted:
            for link in extracted:
                self.collapse.add(link)

class SubTabFactory(factory.django.DjangoModelFactory):
    name = fake.word()
    description = fake.sentence()
    href = fake.url()
    route = fake.url()
    dropdown = random.choice([True, False])
    # collapse

    class Meta:
        model = NavBarSubTab

    @factory.post_generation
    def collapse(self, create, extracted, **kwargs):
        if not create:
            return
        if extracted:
            for link in extracted:
                self.collapse.add(link)

class SubElementFactory(factory.django.DjangoModelFactory):
    name = fake.word()
    description = fake.sentence()
    href = fake.url()
    route = fake.url()
    class Meta:
        model = NavBarSubElement

