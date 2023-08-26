from main.settings.core import BASE_DIR
from pathlib import Path

ROOT_URLCONF = 'main.urls'
STATIC_URL = 'static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
MEDIA_URL = '/media/'
MEDIA_ROOT = Path.joinpath(BASE_DIR, 'media/')
