# Generated by Django 2.2 on 2019-04-16 14:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('buddflix', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Type',
            new_name='Race',
        ),
        migrations.RenameField(
            model_name='strain',
            old_name='type',
            new_name='race',
        ),
    ]
