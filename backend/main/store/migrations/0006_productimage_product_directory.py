# Generated by Django 4.1.2 on 2022-11-03 18:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0005_productimage_product_price_remove_product_image_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='productimage',
            name='product_directory',
            field=models.CharField(default='none', max_length=100),
            preserve_default=False,
        ),
    ]
