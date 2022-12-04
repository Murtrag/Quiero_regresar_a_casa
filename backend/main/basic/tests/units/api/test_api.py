import pytest
#from django.urls import reverse
# from basic.tests.fixtures import article_set
# Internal modules


@pytest.mark.basic
@pytest.mark.api
# @pytest.mark.xfail
def test_article_detail_if_returns_profile(db, article_set):
    pass
    # for i, article in enumerate(article_set):
    #     assert True
        # resp = reverse(
        #         'article_detail',
        #         kwargs={
        #             'language': article.name,
        #             'country': article.country,
        #             'name': article.name,
        #         })
        # assert resp.data.json() == article[i]

#@pytest.mark.basic
#@pytest.mark.urls
#@pytest.mark.xfail
#def test_article_detail_if_returns_correct_url(article_set):
  #  pass
    # for i, article in enumerate(article_set):
    #     resp = reverse(
    #             'article_detail',
    #             kwargs={
    #                 'language': article.name,
    #                 'country': article.country,
    #                 'name': article.name,
    #             })
    #     assert resp.url == '/article_detail/1/1/test_article/'

@pytest.mark.basic
@pytest.mark.api
@pytest.mark.xfail
def test_article_detail_if_return_correct(article_set):
    pass

#@pytest.mark.basic
#@pytest.mark.models
#@pytest.mark.xfail
#def test_article_detail_model_functionality(article_set):
    # Test model thinkgs
#    pass