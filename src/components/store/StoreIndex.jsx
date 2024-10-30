import React from 'react';
import NavBar from '../Navbar';
import StoreForm from './storeForm';
import StoreList from './storeList';

function StoreIndex() {
    const stores=[
        {
          id:1,
          name:"tienda1",
          city:"Armenia"
        },
        {
            id:2,
            name:"tienda2",
            city:"Armenia"
          },
          {
            id:3,
            name:"tienda3",
            city:"Armenia"
          },
          {
            id:4,
            name:"tienda4",
            city:"Armenia"
          },
      ]

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