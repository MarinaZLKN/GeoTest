from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import City, TaxiPark, Video
from .serializers import CitySerializer, TaxiParkSerializer
from geopy.distance import geodesic


def find_nearest_city(lat, lon):
    cities = City.objects.all()
    nearest_city = None
    min_distance = float('inf')

    for city in cities:
        city_coords = (city.latitude, city.longitude)
        user_coords = (lat, lon)
        distance = geodesic(city_coords, user_coords).kilometers

        if distance < min_distance:
            min_distance = distance
            nearest_city = city

    return nearest_city


def index(request):
    return render(request, 'base.html')


class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer


class TaxiParkViewSet(viewsets.ModelViewSet):
    queryset = TaxiPark.objects.all()
    serializer_class = TaxiParkSerializer


class GetCityInfoByCoordinates(APIView):
    def post(self, request):
        try:
            data = request.data
            lat = float(data.get('lat'))
            lon = float(data.get('lon'))

            nearest_city = find_nearest_city(lat, lon)

            if nearest_city:
                taxi_park = TaxiPark.objects.filter(city=nearest_city).first()
                videos = Video.objects.filter(city=nearest_city)

                city_info = {
                    'city_name': nearest_city.name,
                    'phone_number': nearest_city.phone_number,
                    'taxi_park_address': taxi_park.address if taxi_park else 'Таксопарк не найден',
                    'videos': [video.video_url for video in videos]
                }

                return Response(city_info)
            else:
                print("City not found")
                return Response({'error': 'Город не найден'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


class VideoList(APIView):
    def get(self, request, city):
        videos = Video.objects.filter(city=city)
        return Response(videos)

