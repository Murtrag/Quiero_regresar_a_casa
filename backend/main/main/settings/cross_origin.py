from main.settings.core import DEBUG

CORS_ALLOW_CREDENTIALS = True
ALLOWED_HOSTS = ['*']
CSRF_TRUSTED_ORIGINS = ['http://*', 'https://*']

if DEBUG is True:
    ALLOWED_HOSTS.append('*')
    CORS_ORIGIN_ALLOW_ALL = True
    CORS_ORIGIN_WHITELIST = ('http://quiero-regresar.mx', 'http://quiero-regresar.mx:81',)
else:
    CORS_ORIGIN_WHITELIST = ('http://quiero-regresar.mx', 'http://quiero-regresar.mx:81',)
