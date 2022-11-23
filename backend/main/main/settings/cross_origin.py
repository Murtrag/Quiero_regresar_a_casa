from main.settings import DEBUG

ALLOWED_HOSTS = ['quiero-volver.mx']

if DEBUG is True:
    ALLOWED_HOSTS.append('*')
    CORS_ORIGIN_ALLOW_ALL = True
else:
    CORS_ORIGIN_WHITELIST = ('http://quiero-regresar.mx:81', )
