
export default function ProductList({products}) {
    const hanledOpenModel=(id)=>{
        console.log(id)
    }
  return (
    
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Nombre Producto
                </th>
                <th scope="col" className="px-6 py-3">
                    Precio
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
            {products.map(product=>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={product.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.nombre}
                </th>
                <td className="px-6 py-4">
                    ${product.precio}
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-3">Editar</a>
                    
                </td>
                <td className="px-6 py-4">
                    
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-3">Eliminar</a>
                </td>
            </tr>
            )}
        </tbody>
    </table>
</div>

  )
}
