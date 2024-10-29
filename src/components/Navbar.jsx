import React from 'react';

export const NavBar = () => {
    return (
        <nav className="bg-yellow-100 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
                <div className="text-xl font-bold text-orange-600">
                    <a href="/">Tiendas Productos</a>
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <a href={`/productos`} className="text-gray-700 hover:text-orange-600 transition duration-300">Productos</a>
                    </li>
                    <li>
                        <a href={`/tiendas`} className="text-gray-700 hover:text-orange-600 transition duration-300">Tiendas</a>
                    </li>
                </ul>
                
            </div>
        </nav>
    );
};

export default NavBar;