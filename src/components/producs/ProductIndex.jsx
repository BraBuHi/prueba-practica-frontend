import React from 'react';
import NavBar from '../Navbar';
import ProductList from './productList';

function ProductIndex() {
  const products=[
    {
      id:1,
      name:"producto1",
      price:12000
    },
    {
      id:2,
      name:"producto2",
      price:11000
    },
    {
      id:3,
      name:"producto3",
      price:10000
    },
    {
      id:4,
      name:"producto4",
      price:10000
    }
  ]
  return (
    <div>
      <NavBar />
        <div className="max-w-7xl mx-auto p-4">
        <div className='my-10 text-center'>
         <a href="/productos/crear" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300"
            >Crear Producto</a></div>
        <ProductList products={products} />
      </div>
    </div>
  )
}
export default ProductIndex
