import React, { useState } from 'react';

export const ProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('peresedero');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica para enviar los datos del formulario
        console.log({ name, price, type });
        // Reiniciar el formulario
        setName('');
        setPrice('');
        setType('peresedero');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Agregar Producto</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Nombre del Producto:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700">Precio:</label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700">Tipo de Producto:</label>
                <select
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                >
                    <option value="peresedero">Perecedero</option>
                    <option value="no-peresedero">No Perecedero</option>
                </select>
            </div>
            <button
                type="submit"
                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300"
            >
                Agregar Producto
            </button>
        </form>
    );
};

export default ProductForm;
