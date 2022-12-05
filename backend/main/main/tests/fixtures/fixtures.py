import pytest

from pytest_factoryboy import register
from main.tests.factories import FooterFactory


register(FooterFactory) # --> footer_factory

@pytest.fixture()
def footer_set(footer_factory): # --> generator
    return(
        footer_factory() for _ in range(0, 10)
    )