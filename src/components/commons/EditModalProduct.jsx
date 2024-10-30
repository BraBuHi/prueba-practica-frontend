import { useEffect, useState } from "react";

export default function EditModalProduct({ isOpen, onClose, onConfirm, product }) {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [tipo, setTipo] = useState("");

    useEffect(() => {
        if (product) {
            setNombre(product.nombre);
            setPrecio(product.precio);
            setTipo(product.tipo);
        }
    }, [product]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = { ...product, nombre, precio, tipo };
        onConfirm(updatedProduct);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6">
                <h2 className="text-lg font-bold mb-4">Editar Producto</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Nombre del Producto:</label>
                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Precio:</label>
                        <input
                            type="number"
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Tipo:</label>
                        <select
                            value={tipo}
                            onChange={(e) => setTipo(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md"
                            required
                        >
                            <option value="">Seleccione un tipo</option>
                            <option value="Perecedero">Perecedero</option>
                            <option value="No-Perecedero">No Perecedero</option>
                        </select>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="mr-2 bg-gray-300 text-gray-700 rounded-md px-4 py-2"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white rounded-md px-4 py-2"
                        >
                            Guardar Cambios
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
