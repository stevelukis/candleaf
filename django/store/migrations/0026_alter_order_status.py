# Generated by Django 4.1.7 on 2023-04-14 04:45

from django.db import migrations
import django_fsm


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0025_order_shipping_reference_alter_order_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='status',
            field=django_fsm.FSMField(choices=[('a', 'Awaiting payment'), ('b', 'Processed'), ('c', 'Shipped'), ('d', 'Completed'), ('p', 'Cancelled')], default='a', max_length=1),
        ),
    ]
