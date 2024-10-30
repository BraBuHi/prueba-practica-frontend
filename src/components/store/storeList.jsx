import { useState } from "react";
import DeleteModal from "../commons/DeleteModal";
import axios from "axios";

export default function StoreList({ stores }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [storeIdToDelete, setStoreIdToDelete] = useState(null); // Para almacenar el ID de la tienda a eliminar

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/stores/${storeIdToDelete}`);
            console.log('Tienda Eliminada');
            setIsModalOpen(false);
            // Aquí podrías agregar lógica para actualizar tu lista de tiendas
            // Por ejemplo, refrescar la lista de tiendas
        } catch (error) {
            console.error('Error al Eliminar Tienda:', error);
        }
    };

    const openModal = (id) => {
        setStoreIdToDelete(id); // Establece el ID de la tienda a eliminar
        setIsModalOpen(true);
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nombre De Tienda
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ciudad
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Editar
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Eliminar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {stores.map(store => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={store.id}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {store.nombre}
                            </th>
                            <td className="px-6 py-4">
                                {store.ciudad}
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-3">Editar</a>
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={() => openModal(store.id)} // Abre el modal con el ID de la tienda
                                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                                    type="button"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <DeleteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleDelete}
            />
        </div>
    );
}
