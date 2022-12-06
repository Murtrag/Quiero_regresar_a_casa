import pytest

from pytest_factoryboy import register
from main.tests.factories import (
    FooterFactory,
    HeaderFactory,
    LinkFactory
    )


register(FooterFactory) # --> footer_factory
register(HeaderFactory) # --> header_factory
register(LinkFactory) # --> item_factory

@pytest.fixture()
def items_set(link_factory): # --> generator
    def wrap():
        return (
                link_factory() for _ in range(0, 10)
                )
    return wrap

@pytest.fixture()
def menu_set(header_factory, items_set): # --> generator
    def wrap():
        return(
            header_factory.create(items=items_set())
            for _ in range(0, 10)
        )
    return wrap

@pytest.fixture()
def footer_set(footer_factory, menu_set): # --> generator
    return(
        footer_factory.create(menus=menu_set())
        for _ in range(0, 10)
    )
