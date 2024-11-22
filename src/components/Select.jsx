import React from "react";
import "../styles/Select.css"; 
import bogota from "../assets/bogota.jpg"

const Select = () => {
  return (
    <div className="select-container">
      <div className="select-image">
        <img
          src={bogota} 
          alt="Vista de ciudad"
        />
      </div>

      <div className="select-options">
        <div className="select-group">
          <label htmlFor="departure-station">Selecciona la estación de partida</label>
          <select id="departure-station" name="departure">
            <option value="" disabled selected>
              Seleccionar
            </option>
            <option value="station1">La Castellana</option>
            <option value="station2">Parque Calle 106</option>
            <option value="station2">Av Caracas con calle 60</option>
          </select>
        </div>

        <div className="select-group">
          <label htmlFor="arrival-station">Selecciona la estación de llegada</label>
          <select id="arrival-station" name="arrival">
            <option value="" disabled selected>
              Seleccionar
            </option>
            <option value="station1">Suba</option>
            <option value="station2">Teusquillo</option>
            <option value="station2">Calle 66 con carrera 15</option>
          </select>
        </div>

        <button className="start-journey-button">Inicia tu cicloviaje</button>
      </div>
    </div>
  );
};

export default Select;