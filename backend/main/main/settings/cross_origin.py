from main.settings.core import DEBUG

CORS_ALLOW_CREDENTIALS = True
ALLOWED_HOSTS = ['*']
CSRF_TRUSTED_ORIGINS = ['http://quiero-regresar.mx:81']

if DEBUG is True:
    ALLOWED_HOSTS.append('*')
    CORS_ORIGIN_ALLOW_ALL = True
    CORS_ORIGIN_WHITELIST = ['http://quiero-regresar.mx', 'http://quiero-regresar.mx:81', 'http://localhost:8000',]
else:
    CORS_ORIGIN_WHITELIST = ['http://quiero-regresar.mx', 'http://quiero-regresar.mx:81', 'http://localhost:8000',]
