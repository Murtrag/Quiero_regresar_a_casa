from main.settings.core import BASE_DIR, DEBUG

if DEBUG is True:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'quiero_volver',
            'USER': 'postgres',
            'PASSWORD': '123PoStGrEs!',
            'HOST': '192.168.1.4',
            'PORT': '5432',
        }
    }
