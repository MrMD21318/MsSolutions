import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const SupermarketShop: React.FC = () => {
    const color = "#16a34a";

    const products = [
        { name: "Organic Bananas", price: "$1.49 / lb", img: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&q=80", rating: 4.8 },
        { name: "Red Strawberries", price: "$3.99 / box", img: "https://images.unsplash.com/photo-1464965911861-746a04b4b0a7?w=400&q=80", rating: 4.9 },
        { name: "Fresh Sourdough", price: "$5.00", img: "https://images.unsplash.com/photo-1585476644026-c22e0325144b?w=400&q=80", rating: 5.0 },
        { name: "Avocados (3 Pack)", price: "$4.50", img: "https://images.unsplash.com/photo-1523049673856-42848f5d165d?w=400&q=80", rating: 4.7 },
        { name: "Whole Milk", price: "$3.29", img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80", rating: 4.5 },
        { name: "Free Range Eggs", price: "$5.99", img: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80", rating: 4.8 },
    ];

    return (
        <section style={{ padding: '4rem 0' }}>
            <div className="container">
                <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>All Products</motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
                    {products.map((prod, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
                            style={{ background: 'white', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', position: 'relative', border: '1px solid #e5e7eb' }}
                        >
                            <img src={prod.img} alt={prod.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.5rem', color: '#fbbf24', fontSize: '0.9rem' }}>
                                    <Star size={14} fill="#fbbf24" /> {prod.rating}
                                </div>
                                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem' }}>{prod.name}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: color }}>{prod.price}</div>
                                    <button style={{ background: '#f3f4f6', border: 'none', padding: '0.5rem', borderRadius: '50%', cursor: 'pointer', color: '#374151' }}>
                                        <ShoppingCart size={20} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SupermarketShop;
