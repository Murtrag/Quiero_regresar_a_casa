import pytest
from django.urls import NoReverseMatch, reverse, resolve 

language_country_url_not_exist_params = (
    (999999999, 1),
    (1, 999999999),
    (999999999, 999999999),
    (0, 1),
    (1, 0),
    )
language_country_url_incorrect_params = (
    (-1, 1),
    (1, -1),
    ('a', 1),
    (1, 'a')
)

# Footer
@pytest.mark.main
# @pytest.mark.urls
@pytest.mark.xfail
def test_footer_url(db, client, footer_set):
    url_name = 'footer'
    for footer in footer_set:
        path = reverse(url_name, kwargs={
            'language': footer.language.pk,
            'country': footer.country.pk,
            })
        assert resolve(path).view_name == url_name


@pytest.mark.parametrize('language, country', language_country_url_not_exist_params)
@pytest.mark.main
# @pytest.mark.urls
@pytest.mark.xfail
def test_footer_url_if_exists(db, client, footer_set, language, country):
    url_name = 'footer'
    path = reverse(url_name, kwargs={
        'language': language,
        'country': country,
        })
    assert client.get(path).status_code == 404

@pytest.mark.parametrize('language, country', language_country_url_incorrect_params)
@pytest.mark.main
# @pytest.mark.urls
@pytest.mark.xfail
def test_footer_url_if_fails(db, client, footer_set, language, country):
    url_name = 'footer'
    with pytest.raises(NoReverseMatch):
        path = reverse(url_name, kwargs={
            'language': language,
            'country': country,
            })
        client.get(path)

# Nav bar
@pytest.mark.main
# @pytest.mark.urls
def  test_nav_bar_url(db, client, tab_set):
    language = 1
    country = 1
    url_name = 'nav_bar'
    path = reverse(url_name, kwargs={
        'language': language,
        'country': country
        })
    assert resolve(path).view_name == url_name



@pytest.mark.parametrize('language, country', language_country_url_not_exist_params)
@pytest.mark.main
# @pytest.mark.urls
def test_nav_bar_url_if_exists(db, client, tab_set, language, country):
    url_name = 'nav_bar'
    path = reverse(url_name, kwargs={
        'language': language,
        'country': country,
        })
    assert client.get(path).status_code == 404

@pytest.mark.parametrize('language, country', language_country_url_incorrect_params)
@pytest.mark.main
# @pytest.mark.urls
def test_nav_bar_url_if_fails(db, client, tab_set, language, country):
    url_name = 'nav_bar'
    with pytest.raises(NoReverseMatch):
        path = reverse(url_name, kwargs={
            'language': language,
            'country': country,
            })
        client.get(path)
