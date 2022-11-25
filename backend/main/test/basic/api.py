import pytest
from django.urls import reverse
from pytest_drf import APIViewTest, Returns200, UsesGetMethod
from pytest_lambda import lambda_fixture

class TestArticleList(
    APIViewTest,
    UsesGetMethod,
    Returns200,
):
    url = lambda_fixture(lambda: reverse('hello-world'))

    def test_it_returns_hello_world(self, json):
        expected = 'Hello, World!'
        actual = json
        assert expected == actual