import factory
from faker import Faker

# Model imports
from main.models import (
    Link,
    Header,
    Brand,
    Footer
)

# Facotry imports
# ...

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
            for item in range(0,10):
                self.menus.add(link_factory())


class BrandFactory(factory.django.DjangoModelFactory):
    name = fake.word()
    image = fake.image_url()
    route = fake.url()

    class Meta:
        model = Brand

class FooterFactory(factory.django.DjangoModelFactory):
    ''' Class creates a sample record in Footer '''
    brand = factory.SubFactory(BrandFactory)

    class Meta:
        model = Footer
    
    @factory.post_generation
    def menus(self, create, extracted, **kwargs):
        if not create:
            return
        if extracted:
            for menu in extracted:
                self.menus.add(menu)
            # for menu in range(0,10):
            #     breakpoint()
            #     self.menus.add(header_factory())