from django.contrib import admin
from django.urls import path, re_path, include
# from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

# router = routers.DefaultRouter()
# router.register(r'missing-person', views.MissingPersonViewSet)
# router.register(r'missing-person/<int:pk>/', views.MissingPersonDetail.as_view())

urlpatterns = [
        # path('', include(router.urls)),
        path(r'missing-people/', views.MissingPersonList.as_view()),
        path(r'missing-people/<int:pk>/', views.MissingPersonDetail.as_view())
]
urlpatterns = format_suffix_patterns(urlpatterns)
