import pytest
from django.urls import reverse
from pytest_drf import APIViewTest, Returns200, UsesGetMethod
from pytest_lambda import lambda_fixture
from tests.settings.conftest import article_set
# Internal modules
# from main.settings.fixtures import env

class TestArticleList(
    APIViewTest,
    UsesGetMethod,
    Returns200,
):
    url = lambda_fixture(lambda: reverse('article_list', kwargs={'language': 1, 'country': 1}))

    def test_it_returns_hello_world(self, json,db, article_set):
        expected = 'Hello, World!'
        actual = json
        breakpoint()
        assert expected == actual