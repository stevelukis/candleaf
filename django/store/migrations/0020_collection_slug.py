# Generated by Django 4.1.7 on 2023-04-11 03:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0019_alter_order_payment_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='collection',
            name='slug',
            field=models.SlugField(default='a'),
            preserve_default=False,
        ),
    ]
