import {useEffect, useState } from 'react'
import fetchBikeStations from '../API/fetchBikeStations';

const ProductList = () => {

    const [stations, setStations] = useState ([]);
    const [loading, setLoading] = useState (true)
    const [error, setError] = useState (null);

    //Datos de la API
    useEffect(()=>{
        fetchBikeStations();
    },[])

    if (loading) return <p>cargando</p>;
    if (error) return <p>error cargando</p>

  return (
    <div>
      <h1>Estaciones Disponiblers</h1>
        
    </div>
  )
}

export default ProductList
