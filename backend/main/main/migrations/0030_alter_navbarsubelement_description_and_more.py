# Generated by Django 4.1.2 on 2023-01-15 17:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0029_navbarsubelement_position_navbarsubtab_position'),
    ]

    operations = [
        migrations.AlterField(
            model_name='navbarsubelement',
            name='description',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='navbarsubelement',
            name='name',
            field=models.CharField(max_length=85),
        ),
        migrations.AlterField(
            model_name='navbarsubtab',
            name='description',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='navbarsubtab',
            name='name',
            field=models.CharField(max_length=85),
        ),
        migrations.AlterField(
            model_name='navbartab',
            name='name',
            field=models.CharField(max_length=85),
        ),
    ]
