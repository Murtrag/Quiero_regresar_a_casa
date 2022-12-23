import pytest
#from django.urls import reverse


# Footer
@pytest.mark.main
@pytest.mark.api
def test_footer_set_if_returns_complete_footer(db, footer_set):
    for footer in footer_set:
        assert all((
            isinstance(footer.brand.pk, int),
            len(footer.menus.all()),  # Check if item has menus assigned
            len(footer.menus.first().items.all()), # Chack if menus has links assigned
        ))

# Nav bar
@pytest.mark.main
@pytest.mark.api
def test_nav_bar_set_if_returns_complete_nav_bar(db, nav_bar_set):
    for el,i in enumerate(nav_bar_set):
        el_collapse = el.collapse.all()
        assert all((
            len(el_collapse) if i%2 else len(el_collapse)==0,
            len(el_collapse.first()) if i%2 else len(el_collapse.first())==0
        ))
