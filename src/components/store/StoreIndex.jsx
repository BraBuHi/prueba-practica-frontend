import React from 'react';
import NavBar from '../Navbar';
import StoreForm from './storeForm';

function StoreIndex() {
  return (
    <div>
      <NavBar />
      <h1>Store</h1>
      <div className="max-w-7xl mx-auto p-4">
        <StoreForm />
        </div>
    </div>

  )
}

export default StoreIndex