# Generated by Django 4.1.2 on 2022-11-09 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('basic', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='text_css',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='article',
            name='text_html',
            field=models.TextField(blank=True),
        ),
    ]