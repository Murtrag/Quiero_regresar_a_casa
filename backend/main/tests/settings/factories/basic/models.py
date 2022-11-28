import factory
from faker import Faker

# Model imports
from basic.models import Article

# Factory imports
from tests.settings.factories.main import LanguageFactory, CountryFactory

fake = Faker()

class ArticleFactory(factory.django.DjangoModelFactory):
    language = factory.SubFactory(LanguageFactory)
    Country = factory.SubFactory(CountryFactory)
    # title = fake.title()
    title = "fake.title()"
    text_html = fake.text()
    text_css = ".test{ background-color: black}"

    class Meta:
        model = Article