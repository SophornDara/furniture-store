// src/components/ui/CategoryFilter.jsx
import React, { useState, useEffect } from 'react';
import { getCategories } from '../../services/fakeApiServices';

const CategoryFilter = ({ selectedCategory, onSelectCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await getCategories();
            setCategories(data);
        };
        fetchCategories();
    }, []);

    return (
        <div className="flex justify-center space-x-2 sm:space-x-4 mb-8 flex-wrap">
            {categories.map(category => (
                <button
                    key={category.id}
                    onClick={() => onSelectCategory(category.id)}
                    className={`px-4 py-2 text-sm sm:text-base rounded-md font-medium transition-colors
                        ${selectedCategory === category.id
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }
                    `}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;