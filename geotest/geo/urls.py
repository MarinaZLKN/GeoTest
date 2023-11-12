from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from .views import CityViewSet, TaxiParkViewSet, GetCityInfoByCoordinates

router = DefaultRouter()
router.register(r'cities', CityViewSet)
router.register(r'taxiparks', TaxiParkViewSet)

urlpatterns = [
    path('', views.index, name='index'),
    path('api/GetCityInfoByCoordinates/', GetCityInfoByCoordinates.as_view(), name='get_city_by_coordinates'),
]

urlpatterns += router.urls

