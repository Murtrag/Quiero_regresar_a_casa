from django.urls import path
from .views import (under_construction_view, ArticleDetail)

urlpatterns = [
    path('', under_construction_view),
    path(r'article/<int:language>/<int:country>/<str:title>',
         ArticleDetail.as_view())
]
