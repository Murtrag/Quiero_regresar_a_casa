import pytest
from django.urls import reverse, resolve

language_country_url_false_params = [
    (999999999, 1),
    (1, 999999999),
    (999999999, 999999999),
    (0, 1),
    (1, 0),
    (-1, 1),
    (1, -1),
    ('a', 1)
    (1, 'a')
    ]

@pytest.mark.main
@pytest.mark.urls
def test_footer_url(client, footer_set):
    url_name = 'footer'
    for footer in footer_set:
        path = reverse(url_name, kwargs={
            'language': footer.language.pk,
            'country': footeer.country.pk,
            })
        assert resolve(path).view_name == url_name


@pytest.mark.parametrize('language, country', **language_country_url_false_params)
@pytest.mark.main
@pytest.mark.urls
def test_footer_url_if_fails(client, footer_set, language, country):
    url_name = 'footer'
    with pytest.raises(Error) # Check what error
        path = reverse(url_name, kwargs={
            'language': language,
            'country': country,
            })
