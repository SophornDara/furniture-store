// src/components/layout/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow-md py-4 sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-brand-primary"> {/* Changed to brand color */}
                    Furni<span className="text-brand-secondary">Shop</span> {/* Changed to brand color */}
                </div>
                <nav>
                    <ul className="flex space-x-2 md:space-x-6"> {/* Adjusted spacing for responsiveness */}
                        <li><a href="#" className="text-brand-text-main hover:text-brand-primary px-3 py-2 rounded-md">Home</a></li>
                        <li><a href="#" className="text-brand-text-main hover:text-brand-primary px-3 py-2 rounded-md">Shop</a></li>
                        <li><a href="#" className="text-brand-text-main hover:text-brand-primary px-3 py-2 rounded-md">About Us</a></li>
                        <li><a href="#" className="text-brand-text-main hover:text-brand-primary px-3 py-2 rounded-md">Contact</a></li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-3">
                    <button className="text-brand-secondary hover:text-brand-primary p-2 rounded-full hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                    <button className="text-brand-secondary hover:text-brand-primary p-2 rounded-full hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993-1.263 12c-.07.665-.647 1.123-1.317 1.123H7.224c-.67 0-1.246-.458-1.317-1.123L4.644 8.507A1.875 1.875 0 0 1 6.52 6h10.96c.996 0 1.842.725 1.968 1.668Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;