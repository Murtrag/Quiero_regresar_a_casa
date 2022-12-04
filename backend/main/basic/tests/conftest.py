import pytest
from pytest_factoryboy import register


from .factories import ArticleFactory


register(ArticleFactory) # --> article_factory

@pytest.fixture() # --> generator
def article_set(article_factory):
    return (article_factory() for _ in range(0,10))