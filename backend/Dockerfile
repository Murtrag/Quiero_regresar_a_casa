# syntax=docker/dockerfile:1
FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY . /code/
RUN pip install -r requirements.txt
CMD ["python", "main/manage.py", "runserver", "0.0.0.0:8000"]
