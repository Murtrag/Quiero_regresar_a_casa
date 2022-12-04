import pytest
from pytest_factoryboy import register


from .factories import ArticleFactory


register(ArticleFactory) # --> article_factory

@pytest.fixture()
def article_set(article_factory):
    return article_factory()