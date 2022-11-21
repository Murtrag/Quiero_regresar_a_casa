# Generated by Django 4.1.2 on 2022-11-19 11:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0011_brand'),
    ]

    operations = [
        migrations.CreateModel(
            name='Footer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brand', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='main.brand')),
                ('menus', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.header')),
            ],
        ),
    ]