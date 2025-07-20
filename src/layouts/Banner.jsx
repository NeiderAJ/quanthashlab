// src/components/Banner.jsx
import React from 'react';
import videoBanner from '../assets/video.mp4'; // Ajusta la ruta a tu video

const Banner = () => {
  return (
    <div className="banner-container">
      <video autoPlay loop muted className="banner-video" >
        <source src={videoBanner} type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      <div className="banner-text">
        <p> From Physics to Finance </p>
      </div>
     
    </div>
  );
};

export default Banner;
