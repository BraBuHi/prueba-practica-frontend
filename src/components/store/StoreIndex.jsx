import React, { useEffect, useState } from 'react';
import NavBar from '../Navbar';
import StoreList from './storeList';
import axios from 'axios';

function StoreIndex() {
    const [stores,setStores]=useState([]);
    useEffect(()=>{
      getStores()   
    },[])
    const getStores=async()=>{
        const response=await axios.get("http://localhost:3000/stores");
        const _stores=response.data;
        setStores(_stores)
    } 
    
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto p-4">
        <div className='my-10 text-center'><a href="/tiendas/crear" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300"
            >Crear Tienda</a></div>
        <StoreList stores={stores}/>
        </div>
    </div>

  )
}

export default StoreIndex