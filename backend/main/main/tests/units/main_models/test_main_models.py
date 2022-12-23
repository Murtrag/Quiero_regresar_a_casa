import pytest
from main.models import (
        Footer,
        FooterLink,
        FooterBrand,
        NavBarTab,
        NavBarSubTab,
        NavBarSubElement
        )
# Footer
@pytest.mark.main
@pytest.mark.models
def test_footer_check_header(db, footer_factory):
    for _ in range(0, 10):
        footer = footer_factory()
        assert Footer.objects.filter(pk=footer.pk)


@pytest.mark.main
@pytest.mark.models
def test_footer_check_link(db, link_factory):
    for _ in range(0, 10):
        link = link_factory()
        assert FooterLink.objects.filter(pk=link.pk)


@pytest.mark.main
@pytest.mark.models
def test_footer_check_brand(db, brand_factory):
    for _ in range(0, 10):
        brand = brand_factory()
        assert FooterBrand.objects.filter(pk=brand.pk)

# Nav bar
@pytest.mark.main
@pytest.mark.models
@pytest.mark.xfail
def test_nav_bar_check_tab(db, tab_factory):
    for _ in range(0, 10):
        tab =  tab_factory()
        assert NavBarTab.objects.filter(pk=tab.pk)

@pytest.mark.main
@pytest.mark.models
@pytest.mark.xfail
def test_nav_bar_check_sub_tab(db, sub_tab_factory):
    for _ in range(0, 10):
        sub_tab =  sub_tab_factory()
        assert NavBarSubTab.objects.filter(pk=sub_tab.pk)

@pytest.mark.main
@pytest.mark.models
@pytest.mark.xfail
def test_nav_bar_check_sub_element(db, sub_element_factory):
    for _ in range(0, 10):
        sub_element =  sub_element_factory()
        assert NavBarSubElement.objects.filter(pk=sub_element.pk)
        

