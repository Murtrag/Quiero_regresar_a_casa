# Generated by Django 4.1.2 on 2022-11-19 12:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0014_alter_footer_menus'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='footer',
            name='menus',
        ),
        migrations.AddField(
            model_name='footer',
            name='menus',
            field=models.ManyToManyField(to='main.header'),
        ),
    ]