# Generated by Django 4.1.2 on 2022-11-09 10:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('main', '0006_country_language'),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('text_html', models.TextField()),
                ('text_css', models.TextField()),
                ('country', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.country')),
                ('language', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.language')),
            ],
        ),
    ]