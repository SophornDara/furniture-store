// src/components/layout/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 text-center mt-12">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} FurniShop. All rights reserved.</p>
                <p className="text-sm text-gray-400 mt-2">
                    Your Modern Furniture Destination
                </p>
            </div>
        </footer>
    );
};

export default Footer; // This is the crucial line for a default export