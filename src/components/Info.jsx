import React from "react";
import "../styles/info.css"; // Estilos CSS

const Info = () => {
  return (
    <div className="choose-section">
      <div className="content">
        <h2>HORA DE LLEGADA</h2>
        <p>Estimado Usuario, su hora estimada de llegada seria</p>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lxCJODenDDI?si=z9gEDa3tn1UODA2g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <p className="video-caption">
          BIKECONNECT <br />
          Tu transporte, nuestra seguridad
        </p>
      </div>
    </div>
  );
};

export default Info;
