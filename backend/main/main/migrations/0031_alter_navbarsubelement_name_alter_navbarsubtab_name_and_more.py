# Generated by Django 4.1.2 on 2023-06-28 12:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0030_alter_navbarsubelement_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='navbarsubelement',
            name='name',
            field=models.CharField(max_length=150),
        ),
        migrations.AlterField(
            model_name='navbarsubtab',
            name='name',
            field=models.CharField(max_length=150),
        ),
        migrations.AlterField(
            model_name='navbartab',
            name='name',
            field=models.CharField(max_length=120),
        ),
    ]
