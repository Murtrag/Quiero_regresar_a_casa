import pytest

from pytest_factoryboy import register
from main.tests.factories import (
    # Footer
    FooterFactory,
    HeaderFactory,
    LinkFactory,
    BrandFactory,
    # Nav bar
    TabFactory,
    SubTabFactory,
    SubElementFactory
    )


register(FooterFactory) # --> footer_factory
register(HeaderFactory) # --> header_factory
register(LinkFactory) # --> item_factory
register(BrandFactory) # --> brand_factory

register(TabFactory) # --> tab_factory
register(SubTabFactory) # --> sub_tab_factory
register(SubElementFactory) # --> sub_element_factory

# Footer
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

# Nav bar
@pytest.fixture()
def sub_element_set(sub_element_factory): # --> generator
    def wrap():
        return(
            sub_element_factory() for _ in range(0, 10)
        )
    return wrap

@pytest.fixture()
def sub_tab_set(sub_tab_factory, sub_element_set): # --> generator
    def wrap():
        return(
            sub_tab_factory.create(collapse=sub_element_set())
            for _ in range
        )
    return wrap

@pytest.fixture()
# def sub_element_set(sub_element_factory, sub_tab_set): # --> generator
def tab_set(tab_factory, sub_tab_set): # --> generator
    return(
        tab_factory.create(
            collapse = sub_tab_set() if i%2 else [],
            )
        for i in range(0, 10)
    )
