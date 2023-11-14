import React, {useEffect, useState} from 'react';
import'../../styles/Header.css'
import VideoSlider from "./VideoSlider";

function Header ({cityInfo}){

      return (
        <div  className="header">
          <h3>Информация о городе и таксопарке</h3>
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


        </div>
        );
};

export default Header;