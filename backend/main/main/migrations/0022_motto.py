# Generated by Django 4.1.3 on 2022-11-24 14:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0021_subelement_route_subtab_route_tab_route'),
    ]

    operations = [
        migrations.CreateModel(
            name='Motto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('header', models.CharField(max_length=250)),
                ('description', models.TextField()),
            ],
        ),
    ]