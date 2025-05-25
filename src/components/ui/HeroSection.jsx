// src/components/ui/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { getHeroData, getFeatures } from '../../services/fakeApiServices'; // Ensure this path is correct after renaming the service file
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
    const [data, setData] = useState(null);
    const [features, setFeatures] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0); // MOVED THIS HOOK TO THE TOP

    useEffect(() => {
        getHeroData().then(setData);
        getFeatures().then(setFeatures);
    }, []);

    // Early return for loading state is fine AFTER all hooks have been called
    if (!data) {
        return <div className="h-[600px] flex items-center justify-center">Loading Hero...</div>;
    }

    const slides = [
        // Ensure data.livingRoom and data.bedRoom exist before spreading
        ...(data.livingRoom ? [{ ...data.livingRoom, id: 'living' }] : []),
        ...(data.bedRoom ? [{ ...data.bedRoom, id: 'bed' }] : [])
    ];

    // It's safer to define these functions only if 'data' is available,
    // or ensure they handle cases where 'slides' might be empty initially if data structure isn't guaranteed.
    // However, for the hook order rule, their definition placement here is okay
    // as long as they don't call hooks themselves.

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentSlide(prev => (prev + newDirection + slides.length) % slides.length);
    };

    // The handleNext and handlePrev functions are not used in your provided JSX,
    // but if they were, their definition here is fine.
    // const handleNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    // const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    const slideVariants = {
        enter: (directionValue) => ({ // Renamed 'direction' parameter to avoid conflict with state variable
            x: directionValue > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (directionValue) => ({ // Renamed 'direction' parameter
            zIndex: 0,
            x: directionValue < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <section className="bg-gradient-to-r from-slate-100 to-sky-50 pt-8 pb-12">
            <div className="container mx-auto px-4">
                {/* Top Bar */}
                <div className="text-center mb-6">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        The Best Online Furniture Store
                    </span>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                            {data.title}
                        </h1>
                        <p className="text-gray-600 mb-6 text-lg">{data.subtitle}</p>
                        <div className="flex space-x-4 mb-8">
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
                                Shop Now
                            </button>
                            <button className="bg-transparent text-blue-600 px-8 py-3 rounded-md font-semibold border border-blue-600 hover:bg-blue-50 transition duration-300">
                                View All Products
                            </button>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                            {/* Replace with actual star icons */}
                            <span className="text-yellow-400">★★★★★</span>
                            <span>4.9 Ratings</span>
                            <span className="text-gray-400">•</span>
                            <span>2,453+ Reviews</span>
                        </div>
                    </motion.div>

                    {/* Right Image Slider */}
                    <motion.div
                        className="relative h-80 md:h-96 overflow-hidden rounded-lg shadow-xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <AnimatePresence initial={false} custom={direction}>
                            {slides.length > 0 && currentSlide < slides.length && ( // Add check for slides array
                                <motion.img
                                    key={currentSlide}
                                    src={slides[currentSlide].image}
                                    alt={slides[currentSlide].name}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    className="absolute w-full h-full object-cover"
                                />
                            )}
                        </AnimatePresence>
                        {slides.length > 0 && currentSlide < slides.length && ( // Add check for slides array
                            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-3 rounded">
                                <h3 className="font-semibold text-lg">{slides[currentSlide].name}</h3>
                                <p className="text-sm">{slides[currentSlide].items}</p>
                            </div>
                        )}
                        <button onClick={() => paginate(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition">❮</button>
                        <button onClick={() => paginate(1)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition">❯</button>
                    </motion.div>
                </div>

                {/* Features Bar below hero */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <span className="text-3xl">{feature.icon}</span>
                            <div>
                                <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                                <p className="text-sm text-gray-500">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;