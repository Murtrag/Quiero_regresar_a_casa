# Generated by Django 4.1.2 on 2022-12-22 11:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('basic', '0004_article_url_title'),
    ]

    try:
        operations = [
            migrations.RemoveField(
                model_name='article',
                name='url_title',
            ),
        ]
    except Exception:
        print('no such field')
