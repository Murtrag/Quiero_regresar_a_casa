from django.urls import path
from .views import (
under_construction_view, 
ArticleDetail,
ArticleList)

urlpatterns = [
    path('', under_construction_view),
    path('articles', ArticleList.as_view()),
    path(r'article/<int:language>/<int:country>/<str:title>',
         ArticleDetail.as_view()),
    path('footer', FooterList.as_view())
]
