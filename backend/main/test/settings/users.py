from pytest_lambda import lambda_fixture

alice = lambda_fixture(
    lambda: User.objects.create(
        username='alice',
        first_name='Alice',
        last_name='Innchains',
        email='alice@ali.ce',
    ))