from django.urls import path
from .views import (under_construction_view, ArticleDetail)

urlpatterns = [
    path('', under_construction_view),
    path(r'<int:country_pk>/<int:language_pk>/<str:title>',
         ArticleDetail.as_view())
]
