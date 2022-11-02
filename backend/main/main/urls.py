from django.contrib import admin
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('missing-person/', include('missing_person.urls')),
    path('', include('basic.urls')),

    # User api
    path(r'profile/', views.ProfileList.as_view()),
    path(r'profile/<int:pk>/', views.ProfileDetail.as_view())
]

# urlpatterns = format_suffix_patterns(urlpatterns)
