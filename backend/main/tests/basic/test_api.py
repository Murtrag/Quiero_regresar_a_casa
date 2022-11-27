import pytest
from django.urls import reverse
from pytest_drf import APIViewTest, Returns200, UsesGetMethod
from pytest_lambda import lambda_fixture

# Internal modules
# from main.settings.fixtures import env
from tests.settings.fixtures import env

class TestArticleList(
    APIViewTest,
    UsesGetMethod,
    Returns200,
):
    url = lambda_fixture(lambda: reverse('article_list'))

    def test_it_returns_hello_world(self, json, env):
        expected = 'Hello, World!'
        actual = json
        assert expected == actual