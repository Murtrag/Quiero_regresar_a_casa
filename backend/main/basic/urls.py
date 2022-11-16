from django.urls import path
from .views import (
under_construction_view, 
ArticleDetail,
ArticleList)

urlpatterns = [
    path('', under_construction_view),
<<<<<<< HEAD
    path('articles/<int:language>/<int:country>/', ArticleList.as_view()),
    path(r'article/<int:language>/<int:country>/<str:title>',
         ArticleDetail.as_view()),
    path('footer', FooterList.as_view())
=======
    path(r'articles/<int:language>/<int:country>/', ArticleList.as_view()),
    path(r'article/<int:language>/<int:country>/<str:title>/',
         ArticleDetail.as_view())
>>>>>>> origin/main
]
