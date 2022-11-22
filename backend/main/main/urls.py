from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static

<<<<<<< HEAD
from .views import (ProfileList, ProfileDetail, FooterList)
=======
# from .views import (ProfileList, ProfileDetail, FooterList)
from .views import (ProfileList, ProfileDetail, FooterView)
>>>>>>> origin/main

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('missing-person/', include('missing_person.urls')),
    path('', include('basic.urls')),

    # User api
    path(r'profile/', ProfileList.as_view()),
    path(r'profile/<int:pk>/', ProfileDetail.as_view()),

    # Footer api
<<<<<<< HEAD
    path(r'footer/', FooterList.as_view()),
=======
    # path(r'footer/', FooterList.as_view()),
    path(r'footer/', FooterView.as_view()),
>>>>>>> origin/main
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

