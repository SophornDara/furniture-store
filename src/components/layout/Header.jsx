// src/components/layout/Header.jsx
import React from 'react';
// import Logo from '../../assets/images/logo.png'; // Add your logo

const Header = () => {
    return (
        <header className="bg-white shadow-md py-4 sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-600">
                    {/* <img src={Logo} alt="FurniShop" className="h-10" /> */}
                    Furni<span className="text-gray-700">Shop</span>
                </div>
                <nav>
                    <ul className="flex space-x-6 text-gray-600">
                        <li><a href="#" className="hover:text-blue-600">Home</a></li>
                        <li><a href="#" className="hover:text-blue-600">Shop</a></li>
                        <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4">
                    {/* Add icons for search, cart, user if needed */}
                    <button className="hover:text-blue-600">🔍</button>
                    <button className="hover:text-blue-600">🛒</button>
                </div>
            </div>
        </header>
    );
};

export default Header;