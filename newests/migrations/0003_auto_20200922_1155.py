# Generated by Django 3.1.1 on 2020-09-22 18:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newests', '0002_newests_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newests',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
