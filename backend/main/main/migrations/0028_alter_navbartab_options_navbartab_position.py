# Generated by Django 4.1.2 on 2023-01-11 16:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0027_rename_languages_motto_language'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='navbartab',
            options={'ordering': ['position']},
        ),
        migrations.AddField(
            model_name='navbartab',
            name='position',
            field=models.SmallIntegerField(blank=True, null=True),
        ),
    ]
