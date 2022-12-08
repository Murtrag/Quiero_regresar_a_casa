import pytest
from main.models import (
        Footer,
        Link,
        Brand
        )

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
        assert Link.objects.filter(pk=link.pk)


@pytest.mark.main
@pytest.mark.models
def test_footer_check_brand(db, brand_factory):
    for _ in range(0, 10):
        brand = brand_factory()
        assert Brand.objects.filter(pk=brand.pk)


