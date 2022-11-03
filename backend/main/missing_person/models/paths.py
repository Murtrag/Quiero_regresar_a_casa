from os import path
from uuid import uuid4

def image_custom_path(*args, **kwargs):
    _, ext = path.splitext(args[1])
    return f'media/missing_person/{str(uuid4())}{ext}'