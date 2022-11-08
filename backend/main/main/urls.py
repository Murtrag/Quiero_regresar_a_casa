from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static

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

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

