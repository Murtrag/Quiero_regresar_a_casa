import pytest

# Import of all fixtures
# from . fixtures import enviromental_variables
# from basic.tests.factories import ArticleFactory

# from tests.conftest import article_factory
from pytest_factoryboy import register
from basic.tests.factories import ArticleFactory


register(ArticleFactory) # --> article_factory

@pytest.fixture() # --> generator
def article_set(article_factory):
    return (article_factory() for _ in range(0,10))