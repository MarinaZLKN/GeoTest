import React, {useEffect, useState} from 'react';
import Header from "./Header";
import '../../styles/App.css'
import Logo from "./Logo";
import Title from "./Title";
import VideoSlider from "./VideoSlider";

const App = () => {

      const [latitude, setLatitude] = useState(null);
      const [longitude, setLongitude] = useState(null);
      const [cityInfo, setCityInfo] = useState(null);
      const [videos, setVideos] = useState([]);

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
                if (data.videos) {
                  setVideos(data.videos);
                  console.log('Ссылки на видео:', data.videos);
                }
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


  return(
      <div className="app">
          <header>
              <Header cityInfo={cityInfo}/>
          </header>
          <main>
              <div className="section-1">
                  <div className="title-pos">
                       <Title/>
                  </div>
                    <div className="logo-pos">
                        <Logo/>
                    </div>

              </div>
              <div className="section-2">
                  <h1> New SECTION</h1>
                   <VideoSlider videos={videos}/>
              </div>

          </main>
          <footer></footer>
      </div>

  )

};

export default App;
