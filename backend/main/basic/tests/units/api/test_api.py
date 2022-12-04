import pytest


@pytest.mark.basic
@pytest.mark.api
def test_article_set_if_returns_article(db, article_set):
    for article in article_set:
        assert all((
            type(article.country.pk) == int,
            type(article.language.pk) == int,
            type(article.title) == str,
            type(article.text_html) == str,
            type(article.text_css) == str,
        ))