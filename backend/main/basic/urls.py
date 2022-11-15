from django.urls import path
from .views import (
under_construction_view, 
ArticleDetail,
ArticleList)

urlpatterns = [
    path('', under_construction_view),
    path('articles/<int:language>/<int:country>/', ArticleList.as_view()),
    path(r'article/<int:language>/<int:country>/<str:title>',
         ArticleDetail.as_view())
]
