// src/components/ui/ProductCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            className="border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white group" // Added 'group' for potential group-hover states
            whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="relative">
                <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover" /> {/* Increased height a bit */}
                {product.tag && (
                    <span className={`absolute top-2 left-2 bg-brand-accent-red text-white text-xs font-semibold px-2.5 py-1 rounded`}> {/* Used brand color */}
                        {product.tag}
                    </span>
                )}
                {product.timeLeft && (
                     <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs text-center py-1.5"> {/* Adjusted opacity and padding */}
                        {product.timeLeft}
                    </div>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-brand-text-main mb-1 truncate">{product.name}</h3> {/* Added truncate for long names */}
                <div className="flex items-center mb-2">
                    <span className="text-xl font-bold text-brand-primary">${product.price.toFixed(2)}</span> {/* Used brand color */}
                    {product.oldPrice && (
                        <span className="text-sm text-brand-text-muted line-through ml-2">${product.oldPrice.toFixed(2)}</span>
                    )}
                </div>
                {product.rating && (
                    <div className="flex items-center text-sm text-brand-text-muted">
                        {/* Replace with an actual SVG star icon later */}
                        <span className="text-yellow-400 mr-1">⭐</span>
                        <span>{product.rating}</span>
                    </div>
                )}
                {/* Example of a button that could appear on hover using group-hover */}
                {/* <button className="mt-3 w-full bg-brand-primary text-white py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                </button> */}
            </div>
        </motion.div>
    );
};

export default ProductCard;