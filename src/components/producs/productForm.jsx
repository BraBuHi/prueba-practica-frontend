import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Productschema } from '../../services/schemas';
import NavBar from '../Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ProductForm = () => {
    // Define the validation schema

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(Productschema)
    });

    const onSubmit = async (data) => {
        try {
            const response=await axios.post("http://localhost:3000/products",data);
            navigate("/productos")
        } catch (error) {
            console.error('Error al Agregar Producto:', error);
        }
    };

    return (
        <>
            <NavBar />
            <div className='mt-5 text-center'>
                <a href="/productos" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300 mt-20"
                >Lista De Productos</a></div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-10">
                <h2 className="text-xl font-bold mb-4 text-center">Agregar Producto</h2>

                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-gray-700">Nombre Del Producto:</label>
                    <input
                        type="text"
                        id="nombre"
                        {...register('nombre')}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                        placeholder='Example'
                    />
                    {errors.nombre && <span className="text-red-500">{errors.nombre.message}</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="precio" className="block text-gray-700">Precio:</label>
                    <input
                        type="number"
                        id="precio"
                        {...register('precio')}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                        placeholder='0'
                    />
                    {errors.precio && <span className="text-red-500">{errors.precio.message}</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="tipo" className="block text-gray-700">Tipo De Producto:</label>
                    <select
                        id="tipo"
                        {...register('tipo')}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                    >
                        <option value="Perecedero">Perecedero</option>
                        <option value="No-Perecedero">No Perecedero</option>
                    </select>
                    {errors.tipo && <span className="text-red-500">{errors.tipo.message}</span>}
                </div>
                <div className='text-center mt-5'>
                    <button
                        type="submit"
                        className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300"
                    >
                        Agregar Producto
                    </button>
                </div>
            </form>
        </>
    );
};

export default ProductForm;
