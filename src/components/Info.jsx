import React from 'react';
import '../styles/info.css'; // Estilos CSS


const Info = () => {
  return (
    <div className="choose-section">
      <div className="content">
        <h2>HORA DE LLEGADA</h2>
        <p>
          Estimado Usuario, su hora estimada de llegada seria
        </p>
      </div>
      <div className="video-container">
        <iframe 
          width="560" 
          height="315" 
          src="https://youtu.be/lxCJODenDDI?si=0roPWDsvdTufrtJ3" 
          title="Experiencia Bootcamp"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
        <p className="video-caption">BIKECONNECT <br />Tu transporte, nuestra seguridad</p>
      </div>
    </div>
  );
}

export default Info;