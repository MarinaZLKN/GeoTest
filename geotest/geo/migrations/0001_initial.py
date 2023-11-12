# Generated by Django 4.2.7 on 2023-11-12 11:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='City',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('latitude', models.FloatField()),
                ('longitude', models.FloatField()),
                ('phone_number', models.CharField(max_length=16)),
            ],
        ),
        migrations.CreateModel(
            name='TaxiPark',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=128)),
                ('city', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='taxiPark', to='geo.city')),
            ],
        ),
    ]