import React from 'react';
import Slider from "react-slick";
import '../../styles/VideoSlider.css';

function VideoSlider({videos}) {
     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
      };
    if (!videos || videos.length === 0) {
        return <div>Загрузка видео...</div>;
      }
     console.log('videos in VideoSlider: ', videos)

      return (
        <div className="container">
          <div className="video-slider">
            <Slider {...settings}>
              {videos.map((videoUrl, index) => {
                const videoId = videoUrl.split('/').pop().split('?')[0];
                const embedUrl = `https://www.youtube.com/embed/${videoId}`;

                return (
                  <div className="video-pos" key={index}>
                    <iframe
                      className="video-pos-single"
                      src={embedUrl}
                      title={`Video ${index}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      );
}

export default VideoSlider;