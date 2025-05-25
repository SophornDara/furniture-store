// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/layout/Header'; // This line is correct
import HeroSection from '../components/ui/HeroSection';
import ProductList from '../components/ui/ProductList';
// import FlashSaleSection from '../components/ui/FlashSaleSection';
import Footer from '../components/layout/Footer';

const HomePage = () => {
    return (
        <div>
            <Header />
            <main>
                <HeroSection />
                {/* Info sections like Chairs, Sofa, Lighting could be part of ProductList filters or separate components */}
                <ProductList />
                {/* <FlashSaleSection /> */}
            </main>
            {/* <Footer /> */} {/* You can create a simple Footer component */}
        </div>
    );
};

export default HomePage;