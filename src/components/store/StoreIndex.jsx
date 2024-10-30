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
        <a href="/tiendas/crear">Crear Tienda</a>
        <StoreList stores={stores}/>
        </div>
    </div>

  )
}

export default StoreIndex