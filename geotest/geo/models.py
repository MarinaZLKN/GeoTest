from django.db import models


class City(models.Model):
    name = models.CharField(max_length=255)
    latitude = models.FloatField()
    longitude = models.FloatField()
    phone_number = models.CharField(max_length=16)

    def __str__(self):
        return self.name


class TaxiPark(models.Model):
    city = models.ForeignKey(City, related_name='taxiPark', on_delete=models.CASCADE)
    address = models.CharField(max_length=128)

    def __str__(self) -> str:
        return self.address


class Video(models.Model):
    city = models.ForeignKey(City, related_name='video', on_delete=models.CASCADE)
    video_url = models.URLField()

    def __str__(self):
        return self.city.name


