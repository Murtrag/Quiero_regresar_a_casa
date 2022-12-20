import factory
from faker import Faker

# Model imports
from main.models import (
    FooterLink,
    FooterHeader,
    FooterBrand,
    Footer
)

# Facotry imports
from .country import (
    LanguageFactory,
    CountryFactory
)

fake = Faker()


class LinkFactory(factory.django.DjangoModelFactory):
    name = fake.word()
    href = fake.url()

    class Meta:
        model = Link

class HeaderFactory(factory.django.DjangoModelFactory):
    name = fake.word()

    class Meta:
        model = Header

    @factory.post_generation
    def items(self, create, extracted, **kwargs):
        if not create:
            return
        if extracted:
            for item in extracted:
                self.items.add(item)
        self.save()


class BrandFactory(factory.django.DjangoModelFactory):
    name = fake.word()
    image = fake.image_url()
    route = fake.url()

    class Meta:
        model = Brand

class FooterFactory(factory.django.DjangoModelFactory):
    ''' Class creates a sample record in Footer '''
    brand = factory.SubFactory(BrandFactory)
    language = factory.SubFactory(LanguageFactory)
    country = factory.SubFactory(CountryFactory)

    class Meta:
        model = Footer
    
    @factory.post_generation
    def menus(self, create, extracted, **kwargs):
        if not create:
            return
        if extracted:
            for menu in extracted:
                self.menus.add(menu)
        self.save()
            # for menu in range(0,10):
            #     breakpoint()
            #     self.menus.add(header_factory())
