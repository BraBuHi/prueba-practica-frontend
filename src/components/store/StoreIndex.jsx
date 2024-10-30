import React from 'react';
import NavBar from '../Navbar';
import StoreForm from './storeForm';

function StoreIndex() {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto p-4">
        <h1>Lista De Tiendas</h1>
        <a href="/tiendas/crear">Crear Tienda</a>
        </div>
    </div>

  )
}

export default StoreIndex