import factory
import random
from faker import Faker

# Model imports
from main.models import (
        NavBarTab,
        NavBarSubTab,
        NavBarLink,
        )

from .country import (
        LanguageFactory,
        countryFactory
        )

fake = Faker()


class TabFactory(factory.django.DjangoModelFactory):
    # fields
    name = fake.word()
    icon = fake.word()
    columns = random.randit(0, 9)
    rows_per_column = random.randit(0, 9)
    href = fake.url()
    route = fake.url() # Not sure if its as url
    # collapse = 
    class Meta:
        model = NavBarTab

    @factory.post_generation
    def collapse(elf, create, extracted, **kwargs):
        if not create:
            return
        if extracted:
            for link in collapse:
                self.collapse.add(link)

class SubTabFactory(factory.django.DjangoModelFactory):
    name = fake.word()
    description = fake.sentence()
    href = fake.url()
    route = fake.url()
    dropdown = random.chose([True, False])
    # collapse

    class Meta:
        model = NavBarSubTab

    @factory.post_generation
    def collapse(elf, create, extracted, **kwargs):
        if not create:
            return
        if extracted:
            for link in collapse:
                self.collapse.add(link)

class SubElementFactory(factory.django.DjangoModelFactory):
    name = fake.word()
    description = fake.sentence()
    href = fake.url()
    route = fake.url()
    class Meta:
        model = NavBarLink

