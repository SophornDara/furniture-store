import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
// This path should now work if fakeApiService.js is in src/services/
import { getProducts } from '../../services/fakeApiServices';
import CategoryFilter from './CategoryFilter';

// ... rest of ProductList.jsx
// ... rest of the file
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('latest'); // Default to 'Latest Products'

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const data = await getProducts(selectedCategory);
                setProducts(data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
            setLoading(false);
        };
        fetchProducts();
    }, [selectedCategory]);

    if (loading) {
        return <p className="text-center py-10">Loading products...</p>;
    }

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Products Collections</h2>
                <CategoryFilter
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;