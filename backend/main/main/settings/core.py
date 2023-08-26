from os import environ
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

DEBUG = environ.get('SERVER_TYPE', 'production') == 'development'

TEMPLATES = [
        {
            'BACKEND': 'django.template.backends.django.DjangoTemplates',
            'DIRS': [],
            'APP_DIRS': True,
            'OPTIONS': {
                'context_processors': [
                    'django.template.context_processors.debug',
                    'django.template.context_processors.request',
                    'django.contrib.auth.context_processors.auth',
                    'django.contrib.messages.context_processors.messages',
                    ],
                },
            },
        ]

WSGI_APPLICATION = 'main.wsgi.application'

AUTH_PASSWORD_VALIDATORS = [
        {
            'NAME':
            'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
            },
        {
            'NAME':
            'django.contrib.auth.password_validation.MinimumLengthValidator',
            },
        {
            'NAME':
            'django.contrib.auth.password_validation.CommonPasswordValidator',
            },
        {
            'NAME':
            'django.contrib.auth.password_validation.NumericPasswordValidator',
            },
        ]

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
