# Generated by Django 5.0.4 on 2024-12-11 21:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0002_groupmessage'),
    ]

    operations = [
        migrations.AddField(
            model_name='group',
            name='picture',
            field=models.URLField(default=None),
            preserve_default=False,
        ),
    ]
