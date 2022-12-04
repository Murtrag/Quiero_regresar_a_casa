import factory
from faker import Faker

# Model imports
from basic.models import Article

# Factory imports
from main.tests.factories import LanguageFactory, CountryFactory

#from pytest_factoryboy import register
# register(ArticleFactory) # --> article_factory



fake = Faker()

class ArticleFactory(factory.django.DjangoModelFactory):
    ''' Class creates a sample record in Article ''' 

    language = factory.SubFactory(LanguageFactory)
    country = factory.SubFactory(CountryFactory)
    # title = fake.title()
    title = "fake.title()"
    text_html = fake.text()
    text_css = ".test{ background-color: black}"

    class Meta:
        model = Article
# register(ArticleFactory) # --> article_factory