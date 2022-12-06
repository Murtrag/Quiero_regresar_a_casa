import pytest
#from django.urls import reverse


@pytest.mark.main
@pytest.mark.api
def test_footer_set_if_returns_complete_footer(db, footer_set):
    for footer in footer_set:
        assert all((
            isinstance(footer.brand.pk, int),
            len(footer.menus.all()),  # Check if item has menus assigned
            len(footer.menus.first().items.all()), # Chack if menus has links assigned
        ))