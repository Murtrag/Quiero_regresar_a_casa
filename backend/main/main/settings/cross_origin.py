from main.settings.core import DEBUG

ALLOWED_HOSTS = ['quieroregresaracasa.murtrag.repl.co', '*']
CSRF_TRUSTED_ORIGINS = ['http://*', 'https://*']
# This should be removed later on
# ALLOWED_HOSTS.append('*')
# CORS_ORIGIN_ALLOW_ALL = True
# This should be removed later on

if DEBUG is True:
    ALLOWED_HOSTS.append('*')
    CORS_ORIGIN_ALLOW_ALL = True
    CORS_ORIGIN_WHITELIST = ('http://quiero-regresar.mx')
else:
    CORS_ORIGIN_WHITELIST = ('http://quiero-regresar.mx' )
