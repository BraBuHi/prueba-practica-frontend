import { useState } from "react";
import DeleteModal from "../commons/DeleteModal"; 
import EditModal from "../commons/EditModal"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function StoreList({ stores }) {
    const navegation= useNavigate()
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [storeIdToDelete, setStoreIdToDelete] = useState(null); 
    const [storeToEdit, setStoreToEdit] = useState(null); 

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/stores/${storeIdToDelete}`);
            console.log('Tienda Eliminada');
            setIsDeleteModalOpen(false);
            navegation=("/")
        } catch (error) {
            console.error('Error al Eliminar Tienda:', error);
        }
    };

    const openDeleteModal = (id) => {
        setStoreIdToDelete(id);
        setIsDeleteModalOpen(true);
    };

    const openEditModal = (store) => {
        setStoreToEdit(store);
        setIsEditModalOpen(true);
    };

    const handleEdit = async (updatedStore) => {
        try {
            await axios.put(`http://localhost:3000/stores/${updatedStore.id}`, updatedStore);
            console.log('Tienda Actualizada');
            setIsEditModalOpen(false);
            navegation=("/")
        } catch (error) {
            console.error('Error al Actualizar Tienda:', error);
        }
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nombre de Tienda
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ciudad
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Dirección
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
                                {store.direccion}
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={() => openEditModal(store)} 
                                    className="block text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                                    type="button"
                                >
                                    Editar
                                </button>
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={() => openDeleteModal(store.id)}
                                    className="block text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
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
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDelete}
            />

            <EditModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onConfirm={handleEdit}
                store={storeToEdit}
            />
        </div>
    );
}
