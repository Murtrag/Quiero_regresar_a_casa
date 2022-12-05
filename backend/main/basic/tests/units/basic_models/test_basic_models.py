import pytest
from basic.models import Article

@pytest.mark.basic
@pytest.mark.models
def test_article_model_save(db, article_factory):
    ''' Test if new saved models are appearing in DB'''
    for _ in range(0, 10):
        new_article = article_factory()
        assert Article.objects.filter(pk=new_article.pk)

# @pytest.mark.basic
# @pytest.mark.models
# @pytest.mark.xfail
# def test_article_model_filter(article_set):
#     pass