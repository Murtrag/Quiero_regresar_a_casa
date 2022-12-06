import pytest

from pytest_factoryboy import register
from main.tests.factories import (
    FooterFactory,
    HeaderFactory,
    ItemFactory
    )


register(FooterFactory) # --> footer_factory
register(HeaderFactory) # --> header_factory
register(ItemFactory) # --> item_factory

@pytest.fixture
def items_set(item_factory): # --> generator
    return (
            item_factory() for _ in range(0, 10)
            )

@pytest.fixture
def menu_set(header_factory, items_set): # --> generator
    return(
        header_factory.create(items=items_set)
        for _ in range(0, 10)
    )

@pytest.fixture
def footer_set(footer_factory, menu_set): # --> generator
    return(
        footer_factory.create(menus=menu_set)
        for _ in range(0, 10)
    )
