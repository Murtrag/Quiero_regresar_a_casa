from django.urls import path
from .views import (
under_construction_view, 
ArticleDetail,
# ArticleList
)

urlpatterns = [
    # Under construction page
    path('', under_construction_view, name='under_construction'),

    # List of all articles
    # path(r'articles/<int:language>/<int:country>/',
    # ArticleList.as_view(), name='article_list'),

    # Detail article
    path(r'article/<str:language__country_code>/<str:country__country_code>/<int:pk>/',
    ArticleDetail.as_view(), name='detail_article')
]
