import pytest
#from django.urls import reverse


@pytest.mark.main
@pytest.mark.api
def test_footer_set_if_returns_footer(db, footer_set):
    for footer in footer_set:
        assert all((
            isinstance(footer.brand.pk, int),
            len(footer.menus.all())
        ))