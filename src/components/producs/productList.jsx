import { useState } from "react";
import DeleteModal from "../commons/DeleteModal"; 
import EditModalProduct from "../commons/EditModalProduct"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ProductList({ products }) {
    const navigate = useNavigate();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [productIdToDelete, setProductIdToDelete] = useState(null); 
    const [productToEdit, setProductToEdit] = useState(null); 
    

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/products/${productIdToDelete}`);
            console.log('Producto Eliminado');
            setIsDeleteModalOpen(false);
            navigate("/productos")
        } catch (error) {
            console.error('Error al Eliminar Producto:', error);
        }
    };

    const openDeleteModal = (id) => {
        setProductIdToDelete(id);
        setIsDeleteModalOpen(true);
    };

    const openEditModal = (product) => {
        setProductToEdit(product);
        setIsEditModalOpen(true);
    };

    const handleEdit = async (updatedProduct) => {
        try {
            await axios.put(`http://localhost:3000/products/${updatedProduct.id}`, updatedProduct);
            console.log('Producto Actualizado');
            setIsEditModalOpen(false);
            navigate("/productos")
        } catch (error) {
            console.error('Error al Actualizar Producto:', error);
        }
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nombre del Producto
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Precio
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tipo
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
                    {products.map(product => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={product.id}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {product.nombre}
                            </th>
                            <td className="px-6 py-4">
                                {product.precio}
                            </td>
                            <td className="px-6 py-4">
                                {product.tipo}
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={() => openEditModal(product)} 
                                    className="block text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                                    type="button"
                                >
                                    Editar
                                </button>
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={() => openDeleteModal(product.id)} 
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

            <EditModalProduct
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onConfirm={handleEdit}
                product={productToEdit}
            />
        </div>
    );
}
