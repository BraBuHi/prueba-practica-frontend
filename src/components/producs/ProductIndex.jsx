import React from 'react';
import NavBar from '../Navbar';
import ProductForm from './productForm';

function ProductIndex() {
  return (
    <div>
      <NavBar />
      <h1>productos</h1>
      <div className="max-w-7xl mx-auto p-4">
        <ProductForm />
      </div>
    </div>
  )
}
export default ProductIndex
