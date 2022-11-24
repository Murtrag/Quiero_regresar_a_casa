from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static
from .views import (ProfileList, ProfileDetail, FooterView, NavBarList,
                    MottoView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls',
                              namespace='rest_framework')),

    # Missing person api
    path('missing-person/', include('missing_person.urls')),

    # Basic api
    path('', include('basic.urls')),

    # User api
    path(r'profile/', ProfileList.as_view()),
    path(r'profile/<int:pk>/', ProfileDetail.as_view()),

    # Footer api
    path(r'footer/', FooterView.as_view()),

    # Motto api
    path(r'motto/<int:language_pk>/', MottoView.as_view()),

    # Nav bar api
    path(r'nav-bar/', NavBarList.as_view()),
]

# Static files debug configuration
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
