from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static
from rest_framework_simplejwt import views as jwt_views
from .views import (ProfileList, LogoutView, ProfileDetail, FooterView, NavBarList,
                    MottoView)

urlpatterns = [
    # Admin view
    path('admin/', admin.site.urls, name='admin'),
    
    # Api authentication view
    path('api-auth/', include('rest_framework.urls',
                              namespace='rest_framework'),
        name='api_auth'),
   
    # Api to get token
    path('authentication/token/', 
        jwt_views.TokenObtainPairView.as_view(), 
        name ='token_obtain_pair'),

    # Api to refresh token
    path('authentication/token/refresh/', 
        jwt_views.TokenRefreshView.as_view(), 
        name ='token_refresh'),

    # Token api logout view
    path('authentication/logout/', LogoutView.as_view(), name ='logout'),

    # Sign up api
    path('authentication/sign-up/', SignUp.as_view(), name ='sign_up'),



    # Missing person api
    path('missing-person/', include('missing_person.urls'),),

    # Basic api
    path('', include('basic.urls')),

    # User api
    path(r'profile/', ProfileList.as_view()),
    path(r'profile/<int:pk>/', ProfileDetail.as_view()),

    # Footer api
    path(r'footer/<str:country__country_code>/<str:language__country_code>/', FooterView.as_view(), name="footer"),

    # Motto api
    path(r'motto/<str:language__country_code>/', MottoView.as_view()),

    # Nav bar api
    path(r'nav-bar/<str:country__country_code>/<str:language__country_code>/', NavBarList.as_view(), name='nav_bar'),
]

# Static files debug configuration
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
