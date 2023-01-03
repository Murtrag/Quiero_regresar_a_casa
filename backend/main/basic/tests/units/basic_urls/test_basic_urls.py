import pytest
from django.urls import reverse, resolve

@pytest.mark.basic
# @pytest.mark.urls
def test_article_detail_if_return_correct_url(db, article_set):
    ''' Test if reverse returns expected url'''
    url_name = 'detail_article'
    for article in article_set:
        path = reverse(url_name, kwargs={
            'language_country_code': article.language.country_code,
            'country_country_code': article.country.country_code,
            'pk': article.pk
        })
        assert resolve(path).view_name == url_name
