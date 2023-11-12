from rest_framework import serializers
from .models import City, TaxiPark


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'


class TaxiParkSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaxiPark
        fields = '__all__'