import pytest
from django.urls import reverse, resolve

@pytest.mark.basic
# @pytest.mark.urls
def test_article_detail_if_return_correct_url(db, article_set):
    ''' Test if reverse returns expected url'''
    url_name = 'detail_article'
    for article in article_set:
        path = reverse(url_name, kwargs={
            'language': article.language.pk,
            'country': article.country.pk,
            'pk': article.pk
        })
        assert resolve(path).view_name == url_name