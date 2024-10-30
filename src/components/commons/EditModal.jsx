import { useState, useEffect } from "react";

export default function EditModal({ isOpen, onClose, onConfirm, store }) {
    const [nombre, setNombre] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [direccion, setDireccion] = useState("");

    useEffect(() => {
        if (store) {
            setNombre(store.nombre);
            setCiudad(store.ciudad);
            setDireccion(store.direccion);
        }
    }, [store]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedStore = { ...store, nombre, ciudad, direccion };
        onConfirm(updatedStore);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6">
                <h2 className="text-lg font-bold mb-4">Editar Tienda</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Nombre de la Tienda:</label>
                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Ciudad:</label>
                        <input
                            type="text"
                            value={ciudad}
                            onChange={(e) => setCiudad(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Dirección:</label>
                        <input
                            type="text"
                            value={direccion}
                            onChange={(e) => setDireccion(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md"
                            required
                        />
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
