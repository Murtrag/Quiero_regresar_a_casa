import pytest

from pytest_factoryboy import register
from main.tests.factories import (
    FooterFactory,
    HeaderFactory,
    )


register(FooterFactory) # --> footer_factory
register(HeaderFactory) # --> footer_factory

@pytest.fixture
def menu_set(header_factory): # --> generator
    return(
        header_factory() for _ in range(0, 10)
    )

@pytest.fixture
def footer_set(footer_factory, menu_set): # --> generator
    return(
        footer_factory.create(menus=menu_set)
        for _ in range(0, 10)
    )