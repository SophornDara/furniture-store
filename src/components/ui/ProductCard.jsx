// src/components/ui/ProductCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Add a generic star icon in src/assets/icons/star.svg
// For simplicity, I'm using a text star. Replace with an SVG.
// import StarIcon from '../../assets/icons/star.svg';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            className="border rounded-lg shadow-lg overflow-hidden bg-white"
            whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="relative">
                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
                {product.tag && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        {product.tag}
                    </span>
                )}
                {product.timeLeft && (
                     <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs text-center py-1">
                        {product.timeLeft}
                    </div>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                <div className="flex items-center mb-2">
                    <span className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
                    {product.oldPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">${product.oldPrice.toFixed(2)}</span>
                    )}
                </div>
                {product.rating && (
                    <div className="flex items-center text-sm text-gray-600">
                        {/* <img src={StarIcon} alt="rating" className="w-4 h-4 mr-1" /> */}
                        <span>⭐</span> {/* Replace with actual icon */}
                        <span>{product.rating}</span>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default ProductCard;