import React from 'react';
import { ShoppingCart, Search, Tag, Apple, Milk, Wheat, Beef, ArrowRight, Star } from 'lucide-react';
import DemoNavbar from '../../../components/demos/DemoNavbar';
import DemoFooter from '../../../components/demos/DemoFooter';
import { motion } from 'framer-motion';

const SupermarketDemo: React.FC = () => {
    const color = "#16a34a"; // Green-600

    return (
        <div style={{ fontFamily: '"Inter", sans-serif', background: '#f9fafb', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <DemoNavbar
                name="FreshMart"
                links={["Shop", "Deals", "Recipes", "Stores"]}
                color={color}
                logoIcon={<Apple size={32} />}
            />

            {/* Search Bar Header */}
            <div style={{ background: 'white', padding: '1rem 0', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', position: 'sticky', top: '72px', zIndex: 40 }}>
                <div className="container" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <input type="text" placeholder="Search for products (e.g. Organic Avocados)..." style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 3rem', borderRadius: '4px', border: '1px solid #d1d5db', outline: 'none', fontSize: '1rem' }} />
                        <Search size={20} color="#9ca3af" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                    </div>
                    <button style={{ background: color, color: 'white', padding: '0.75rem 1.5rem', borderRadius: '4px', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, cursor: 'pointer' }}>
                        <ShoppingCart size={20} /> Cart (0)
                    </button>
                </div>
            </div>

            {/* Hero */}
            <header style={{
                margin: '2rem 0',
                padding: '0 2rem'
            }}>
                <div className="container" style={{
                    background: '#ecfccb',
                    borderRadius: '1.5rem',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '4rem'
                }}>
                    <div style={{ maxWidth: '500px' }}>
                        <span style={{ color: color, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', display: 'block' }}>Weekly Fresh Drops</span>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: '#1a2e05', marginBottom: '1.5rem', lineHeight: 1 }}>Organic & Local Produce</h1>
                        <p style={{ fontSize: '1.25rem', color: '#3f6212', marginBottom: '2rem' }}>Get 20% off your first order of fresh seasonal fruits and vegetables.</p>
                        <button style={{ background: '#1a2e05', color: 'white', padding: '1rem 2rem', borderRadius: '50px', border: 'none', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer' }}>Shop Now</button>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80" alt="Veg Basket" style={{ borderRadius: '1rem', transform: 'rotate(-5deg)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)' }} />
                    </div>
                </div>
            </header>

            {/* Categories */}
            <section style={{ padding: '2rem 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Tag size={24} color={color} /> Shop by Category
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1rem' }}>
                        {[
                            { name: "Fruits", icon: <Apple size={30} /> },
                            { name: "Dairy", icon: <Milk size={30} /> },
                            { name: "Bakery", icon: <Wheat size={30} /> },
                            { name: "Meat", icon: <Beef size={30} /> },
                            { name: "Veg", icon: <Apple size={30} /> },
                            { name: "Deals", icon: <Tag size={30} /> }
                        ].map((cat, i) => (
                            <div key={i} style={{ background: 'white', padding: '2rem 1rem', borderRadius: '1rem', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', cursor: 'pointer', border: '1px solid transparent', transition: 'all 0.2s' }}
                                onMouseEnter={(e) => { e.currentTarget.style.border = `1px solid ${color}`; e.currentTarget.style.color = color; }}
                                onMouseLeave={(e) => { e.currentTarget.style.border = '1px solid transparent'; e.currentTarget.style.color = 'inherit'; }}>
                                <div style={{ marginBottom: '0.5rem', color: '#4b5563' }}>{cat.icon}</div>
                                <div style={{ fontWeight: 600 }}>{cat.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section style={{ padding: '4rem 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Fresh Arrivals</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
                        {[
                            { name: "Organic Bananas", price: "$1.49 / lb", img: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&q=80", rating: 4.8 },
                            { name: "Red Strawberries", price: "$3.99 / box", img: "https://images.unsplash.com/photo-1464965911861-746a04b4b0a7?w=400&q=80", rating: 4.9 },
                            { name: "Fresh Sourdough", price: "$5.00", img: "https://images.unsplash.com/photo-1585476644026-c22e0325144b?w=400&q=80", rating: 5.0 },
                            { name: "Avocados (3 Pack)", price: "$4.50", img: "https://images.unsplash.com/photo-1523049673856-42848f5d165d?w=400&q=80", rating: 4.7 }
                        ].map((prod, i) => (
                            <div key={i} style={{ background: 'white', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', position: 'relative', border: '1px solid #e5e7eb' }}>
                                <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: '#ecfccb', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', color: '#365314', fontWeight: 700 }}>FRESH</div>
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Banner */}
            <section style={{ padding: '2rem 0' }}>
                <div className="container">
                    <div style={{ background: '#111827', borderRadius: '1.5rem', padding: '4rem', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Free Delivery Over $50</h2>
                            <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>We deliver straight to your door step within 2 hours.</p>
                            <button style={{ background: 'white', color: 'black', padding: '1rem 2rem', borderRadius: '4px', border: 'none', fontWeight: 700, cursor: 'pointer' }}>Start Shopping</button>
                        </div>
                        <div style={{ fontSize: '5rem' }}>🚚</div>
                    </div>
                </div>
            </section>

            <DemoFooter name="FreshMart" color={color} />
        </div>
    );
};

export default SupermarketDemo;
