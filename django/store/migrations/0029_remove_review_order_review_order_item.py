# Generated by Django 4.1.7 on 2023-05-01 08:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0028_remove_review_customer_review_order'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='order',
        ),
        migrations.AddField(
            model_name='review',
            name='order_item',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='store.orderitem'),
        ),
    ]
