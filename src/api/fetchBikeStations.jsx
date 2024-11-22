import React from 'react'

const fetchBikeStations = async () => {
  try {
    const response = await fetch("https://api.citybik.es/v2/networks/tembici-bogota");
    if (!response.ok) {
      throw new Error("Error al obtener las estaciones de Bogotá.");
    }
    const data = await response.json();
    const limitedStations = data.network.stations.slice(0, 12)
    setStations(limitedStations); 
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

export default fetchBikeStations