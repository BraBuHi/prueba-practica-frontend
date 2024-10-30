import React, { useEffect, useState } from 'react';
import NavBar from '../Navbar';
import ProductList from './productList';
import axios from 'axios';

function ProductIndex() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
  }, [])
  const getProducts = async () => {
    const response = await axios.get("http://localhost:3000/products");
    const _products = response.data;
    setProducts(_products)
  }

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
