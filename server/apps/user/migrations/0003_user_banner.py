# Generated by Django 5.1.3 on 2024-12-16 20:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_user_bio'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='banner',
            field=models.URLField(default=None),
            preserve_default=False,
        ),
    ]