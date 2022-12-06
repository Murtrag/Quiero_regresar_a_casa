import pytest
from pytest_factoryboy import register

from main.tests.fixtures import *
from main.tests.factories import (
    FooterFactory,
    HeaderFactory,
)


register(HeaderFactory) # --> article_factory
register(FooterFactory) # --> article_factory