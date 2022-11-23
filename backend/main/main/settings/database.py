from os import environ
from main.settings import BASE_DIR

server_type = environ['SERVER_TYPE']

if server_type == 'development':
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

elif server_type == 'production':
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'quiero_volver',
            'USER': 'postgres',
            'PASSWORD': '123PoStGrEs!',
            'HOST': '192.168.1.2',
            'PORT': '5432',
        }
    }
