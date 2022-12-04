import pytest

# Import of all fixtures
# from . fixtures import enviromental_variables
# from basic.tests.factories import ArticleFactory

# from tests.conftest import article_factory

@pytest.fixture
@pytest.mark.django_db
def article_set(article_factory):
    yield (article_factory() for _ in range(0,10))
    # for _ in range(0,10):
    #     yield article_factory()
    # print('created some articles')