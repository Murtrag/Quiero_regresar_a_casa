from main.settings.core import DEBUG
from os import environ

if DEBUG is True:
    SECRET_KEY = 'django-insecure-vi69mux$#t1c_jxyvc%psmrm%@#a9n&6-tqs3$u^^$+h+hatb$'
else:
    SECRET_KEY = environ['SECRET_KEY']
