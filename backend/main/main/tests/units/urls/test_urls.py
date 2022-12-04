import pytest
from django.urls import reverse

@pytest.mark.main
@pytest.mark.urls
@pytest.mark.xfail
def test_footer_url(client):
    url = reverse('footer')
    assert '/url' == ur

