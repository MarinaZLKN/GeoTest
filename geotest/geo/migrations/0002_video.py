# Generated by Django 4.2.7 on 2023-11-13 14:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('geo', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('video_url', models.URLField()),
                ('city', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='video', to='geo.city')),
            ],
        ),
    ]