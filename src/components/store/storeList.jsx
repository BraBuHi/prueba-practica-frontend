export default function StoreList({stores}) {
    return (
      
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" class="px-6 py-3">
                      Nombre De Tienda
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Ciudad
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Editar
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Eliminar
                  </th>
              </tr>
          </thead>
          <tbody>
              {stores.map(store=>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={store.id}>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {store.name}
                  </th>
                  <td class="px-6 py-4">
                      {store.city}
                  </td>
                  <td class="px-6 py-4">
                      <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-3">Editar</a>
                      
                  </td>
                  <td class="px-6 py-4">
                      
                      <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-3">Eliminar</a>
                  </td>
              </tr>
              )}
          </tbody>
      </table>
  </div>
  
    )
  }
  