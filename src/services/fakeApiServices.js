// src/services/fakeApiService.js
// NO import statements for functions defined within this file

const products = [
    { id: 1, name: 'Wooden Sofa Chair', price: 80.00, oldPrice: 160.00, rating: 4.9, imageUrl: '/src/assets/images/wooden-sofa-chair.png', tag: '50% OFF', category: 'Chairs', timeLeft: '05 : 12 : 30 : 25' },
    { id: 2, name: 'Circular Sofa Chair', price: 108.00, oldPrice: 120.00, rating: 5.0, imageUrl: '/src/assets/images/circular-sofa-chair.png', tag: '10% OFF', category: 'Chairs' },
    { id: 3, name: 'Wooden Nightstand', price: 54.00, oldPrice: 60.00, rating: 4.8, imageUrl: '/src/assets/images/wooden-nightstand.png', tag: '10% OFF', category: 'Tables' },
    { id: 4, name: 'Grey Bar Stool', price: 75.00, imageUrl: '/src/assets/images/grey-bar-stool.png', category: 'Chairs' },
    { id: 5, name: 'Modern Armchair', price: 120.00, imageUrl: '/src/assets/images/modern-armchair.png', category: 'Chairs' },
    { id: 6, name: 'Pendant Lamp', price: 65.00, imageUrl: '/src/assets/images/pendant-lamp.png', category: 'Lighting' },
    // Add more products as needed
];

const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'latest', name: 'Latest Products' },
    { id: 'best', name: 'Best Sellers' },
    { id: 'featured', name: 'Featured Products' },
];

const heroData = {
    title: 'Explore Our Modern Furniture Collection',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    livingRoom: { name: 'Living Room', items: '2,500+ Items', image: '/src/assets/images/living-room-hero.png' },
    bedRoom: { name: 'Bed Room', items: '1,500+ Items', image: '/src/assets/images/bed-room-hero.png' }
};

const features = [
    { icon: '🚚', title: 'Free Shipping', description: 'Free shipping for order above $100' },
    { icon: '💳', title: 'Flexible Payment', description: 'Multiple secure payment options' },
    { icon: '🎧', title: '24x7 Support', description: 'We support online all day' }
];

export const getProducts = async (category = 'all') => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    if (category === 'all' || !category) {
        return products;
    }
    // This is a simple filter; you might want more specific logic for "Latest", "Best Sellers"
    return products.filter(p => p.category.toLowerCase() === category.toLowerCase() || category === 'latest' || category === 'best' || category === 'featured');
};

export const getCategories = async () => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return categories;
};

export const getHeroData = async () => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return heroData;
};

export const getFeatures = async () => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return features;
}

export const getProductById = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return products.find(p => p.id === parseInt(id));
};