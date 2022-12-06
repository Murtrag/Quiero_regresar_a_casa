import pytest
from main.models import (
        Footer
        )

@pytest.mark.main
@pytest.mark.models
@pytest.mark.xfail
def test_footer_check_header(db, footer_factory):
    pass
    for _ in range(0, 10):
        footer = footer_factory()
        assert Footer.objects.filter(pk=footer.pk)


@pytest.mark.main
@pytest.mark.models
@pytest.mark.xfail
def test_footer_check_link():
    pass
    for _ in range(0, 10):
        footer = footer_factory()
        assert Footer.objects.filter(pk=footer.pk)


@pytest.mark.main
@pytest.mark.models
@pytest.mark.xfail
def test_footer_check_brand():
    pass
    for _ in range(0, 10):
        footer = footer_factory()
        assert Footer.objects.filter(pk=footer.pk)


@pytest.mark.main
@pytest.mark.models
@pytest.mark.xfail
def test_footer_check_footer():
    pass
    for _ in range(0, 10):
        footer = footer_factory()
        assert Footer.objects.filter(pk=footer.pk)

