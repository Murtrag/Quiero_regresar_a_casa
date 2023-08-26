from main.settings.core import BASE_DIR
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

STATIC_URL = 'static/'
STATIC_ROOT = Path.joinpath(BASE_DIR.parent, 'nginx', 'static')

MEDIA_URL = '/media/'
MEDIA_ROOT = Path.joinpath(BASE_DIR.parent, 'nginx', 'media')

