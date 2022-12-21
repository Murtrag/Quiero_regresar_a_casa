from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static
from .views import (ProfileList, ProfileDetail, FooterView, NavBarList,
                    MottoView)

urlpatterns = [
    # Admin view
    path('admin/', admin.site.urls, name='admin'),
    
    # Api authentication view
    path('api-auth/', include('rest_framework.urls',
                              namespace='rest_framework'),
        name='api_auth'),

    # Missing person api
    path('missing-person/', include('missing_person.urls'),),

    # Basic api
    path('', include('basic.urls')),

    # User api
    path(r'profile/', ProfileList.as_view()),
    path(r'profile/<int:pk>/', ProfileDetail.as_view()),

    # Footer api
    path(r'footer/<int:language>/<int:country>/', FooterView.as_view(), name="footer"),

    # Motto api
    path(r'motto/<int:language_pk>/', MottoView.as_view()),

    # Nav bar api
    path(r'nav-bar/<int:language>/<int:country>/', NavBarList.as_view(), name='nav_bar'),
]

# Static files debug configuration
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
