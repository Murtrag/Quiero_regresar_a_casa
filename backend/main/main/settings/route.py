from main.settings import BASE_DIR
from pathlib.Path import joinpath

ROOT_URLCONF = 'main.urls'
STATIC_URL = 'static/'
MEDIA_URL = '/media/'
MEDIA_ROOT = joinpath(BASE_DIR, 'media/')
