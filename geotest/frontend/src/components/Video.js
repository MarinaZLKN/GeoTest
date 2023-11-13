import React, { useState, useEffect } from 'react';

function Video() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      let city = // Определите город пользователя
      fetch(`/api/videos/${city}`)
        .then(response => response.json())
        .then(data => {
          setVideos(data);
        });
    });
  }, []);

  return (
    <div>
      {videos.map((video, index) => (
        <iframe
          src={video.video_url}
          key={index}
          title={`Video ${index}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
}

export default Video;
