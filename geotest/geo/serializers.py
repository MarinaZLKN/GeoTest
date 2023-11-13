from rest_framework import serializers
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import City, TaxiPark, Video


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'


class TaxiParkSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaxiPark
        fields = '__all__'


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['video_url']


class VideoList(APIView):
    def get(self, request, city_id):
        city = get_object_or_404(City, pk=city_id)
        videos = city.videos.all()
        serializer = VideoSerializer(videos, many=True)
        return Response(serializer.data)

