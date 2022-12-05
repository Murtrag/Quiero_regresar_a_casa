import pytest
from pytest_factoryboy import register

from main.tests.fixtures import footer_set
from main.tests.factories import FooterFactory


register(FooterFactory) # --> article_factory