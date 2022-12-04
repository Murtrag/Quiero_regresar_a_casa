import pytest
from django.urls import reverse

@pytest.mark.basic
@pytest.mark.urls
@pytest.mark.xfail
def test_article_detail_if_return_correct_url(article_set):
    pass