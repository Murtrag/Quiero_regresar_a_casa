# Generated by Django 4.1.2 on 2022-11-10 14:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('basic', '0002_alter_article_text_css_alter_article_text_html'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='article',
            options={'ordering': ('title',)},
        ),
    ]
