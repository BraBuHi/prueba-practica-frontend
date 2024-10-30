import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Storeschema } from '../../services/schemas';
import NavBar from '../Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StoreForm = () => {
    // Define the validation schema

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(Storeschema)
    });

    const onSubmit = async (data) => {
        try {
            const response=await axios.post("http://localhost:3000/stores",data);
            navigate("/tiendas")
        } catch (error) {
            console.error('Error al Agregar Tienda:', error);
        }
    };

    return (
        <>
            <NavBar />
            <div className='mt-5 text-center'>
            <a href="/tiendas" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300 mt-20"
            >Lista De Tiendas</a>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-10">
                <h2 className="text-xl font-bold mb-4 text-center">Agregar La Tienda</h2>

                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-gray-700">Nombre De La Tienda:</label>
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
                    <label htmlFor="ciudad" className="block text-gray-700">Ciudad:</label>
                    <input
                        type="text"
                        id="ciudad"
                        {...register('ciudad')}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                        placeholder='Example'
                    />
                    {errors.ciudad && <span className="text-red-500">{errors.ciudad.message}</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="direccion" className="block text-gray-700">Direccion</label>
                    <input
                        type="text"
                        id="direccion"
                        {...register('direccion')}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                        placeholder='Example'
                    />
                    {errors.direccion && <span className="text-red-500">{errors.direccion.message}</span>}
                </div>
                <div className='mt-5 text-center'>
                    <button
                        type="submit"
                        className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300"
                    >
                        Agregar Tienda
                    </button>
                </div>
            </form>
        </>
    );
};

export default StoreForm;
