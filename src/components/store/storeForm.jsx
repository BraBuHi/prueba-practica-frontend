import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Storeschema } from '../../services/schemas';
import NavBar from '../Navbar';

const StoreForm = () => {
    // Define the validation schema


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(Storeschema)
    });

    const onSubmit = async (data) => {
        try {
            // Here you can make the API call with axios
            //  const response = await axios.post('/api/products', data);
            console.log(data); // Handle the response as you wish
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
                    <label htmlFor="name" className="block text-gray-700">Nombre De La Tienda:</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name')}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                        placeholder='Example'
                    />
                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="city" className="block text-gray-700">Ciudad:</label>
                    <input
                        type="text"
                        id="city"
                        {...register('city')}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                        placeholder='Example'
                    />
                    {errors.city && <span className="text-red-500">{errors.city.message}</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700">Direccion</label>
                    <input
                        type="text"
                        id="address"
                        {...register('address')}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                        placeholder='Example'
                    />
                    {errors.address && <span className="text-red-500">{errors.address.message}</span>}
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
