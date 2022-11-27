import os
import pytest

@pytest.fixture()
def enviromental_variables():
    print('set fixture')
    os.environ['SERVER_TYPE'] = 'development'