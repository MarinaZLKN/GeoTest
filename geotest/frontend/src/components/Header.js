import React, {useEffect, useState} from 'react';
import'../../styles/Header.css'

function Header (){
      const [latitude, setLatitude] = useState(null);
      const [longitude, setLongitude] = useState(null);
      const [cityInfo, setCityInfo] = useState(null);

      useEffect(() => {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            setLatitude(lat);
            setLongitude(lon);

            try {
              const response = await fetch(`http://127.0.0.1:8000/api/GetCityInfoByCoordinates/?lat=${lat}&lon=${lon}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ lat, lon }),
              });
              if (response.ok) {
                const data = await response.json();
                console.log('Data', data)
                setCityInfo(data);
              } else {
                console.error('Ошибка при получении данных с сервера');
              }
            } catch (error) {
              console.error('Ошибка при выполнении запроса: ', error);
            }
          });
        } else {
          console.error("Geolocation API не поддерживается в вашем браузере.");
        }
      }, []);

      return (
        <div  className="header">
          <h3>Информация о городе и таксопарке</h3>
          {latitude && longitude ? (
            <div>
              {cityInfo ? (
                <div  className="header-info">
                  <p>Город: {cityInfo.city_name}</p>
                  <p>Телефонный номер города: {cityInfo.phone_number}</p>
                  <p>Адрес таксопарка: {cityInfo.taxi_park_address}</p>
                </div>
              ) : (
                <p>Загрузка информации...</p>
              )}
            </div>
          ) : (
            <p>Определение геолокации...</p>
          )}

        </div>
        );
};

export default Header;