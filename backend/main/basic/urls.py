from django.contrib import admin
from django.urls import path
from .views import under_construction_view

urlpatterns = [
    path('', under_construction_view),
    path(r'<int:pk>/', views.MissingPersonDetail.as_view())
]
