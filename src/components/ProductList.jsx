import { useEffect, useState } from 'react';
import "../styles/ProductList.css";

const ProductList = () => {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Datos de la API
  useEffect(() => {
    const fetchBikeStations = async () => {
      try {
        const response = await fetch("https://api.citybik.es/v2/networks/tembici-bogota");
        if (!response.ok) {
          throw new Error("Error al obtener las estaciones de Bogotá.");
        }
        const data = await response.json();
        const limitedStations = data.network.stations.slice(0,12)
        setStations(limitedStations);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBikeStations();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1 className="title">Estaciones Disponibles</h1>
      <div className="cards-container">
        {stations.map((station) => (
          <div className="card" key={station.id}>
            <h2 className="card-title">{station.name}</h2>
            <p className="card-text">
              <strong>Bicicletas disponibles:</strong> {station.free_bikes || 'N/A'}
            </p>
            <p className="card-text">
              <strong>Dirección:</strong> {station.extra.address || 'No disponible'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;