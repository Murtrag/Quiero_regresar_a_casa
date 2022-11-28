import pytest
from django.contrib.auth.models import User

# Import of all fixtures
# from . fixtures import enviromental_variables
from . factories.basic import ArticleFactory

from pytest_factoryboy import register
register(ArticleFactory)


@pytest.mark.django_db
def article_set(db, article_factory):
    for _ in range(0,10):
        yield article_factory.build()
    print('created some articles')
