from main.settings.core import DEBUG

ALLOWED_HOSTS = ['quiero-volver.mx']

# This should be removed later on
# ALLOWED_HOSTS.append('*')
# CORS_ORIGIN_ALLOW_ALL = True
# This should be removed later on

if DEBUG is True:
    ALLOWED_HOSTS.append('*')
    CORS_ORIGIN_ALLOW_ALL = True
else:
    CORS_ORIGIN_WHITELIST = ('http://quiero-regresar.mx:81', )
