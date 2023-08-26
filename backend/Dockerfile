# syntax=docker/dockerfile:1
FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY . /code/
RUN pip install -r requirements.txt
RUN python manage.py collectstatic --noinput
# CMD ["python", "main/manage.py", "runserver", "0.0.0.0:8000"]
CMD ["gunicorn", "-w", "2", "-b", "0.0.0.0:8000", "--chdir", "/code/main", "main.wsgi:application"]

