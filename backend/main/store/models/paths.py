from uuid import uuid4
from os import path

category_custom_directory = 'media/store/category'


def product_custom_directory(*args, **kwargs):
    name, ext = path.splitext(args[1])
    return f'media/store/product/{args[0].product_directory}/{name}_{str(uuid4())}{ext}'
