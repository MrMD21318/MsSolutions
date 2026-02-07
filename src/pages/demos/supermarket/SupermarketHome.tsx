import React from 'react';
import { Tag, Apple, Milk, Wheat, Beef } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SupermarketHome: React.FC = () => {
    const color = "#16a34a";

    return (
        <>
            {/* Hero */}
            <header style={{ paddingTop: '100px', paddingBottom: '2rem', paddingLeft: '2rem', paddingRight: '2rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    className="container"
                    style={{
                        background: '#ecfccb',
                        borderRadius: '1.5rem',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '4rem',
                        minHeight: '70vh'
                    }}
                >
                    <div style={{ maxWidth: '500px' }}>
                        <span style={{ color: color, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', display: 'block' }}>منتجات طازجة أسبوعياً</span>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: '#1a2e05', marginBottom: '1.5rem', lineHeight: 1 }}>منتجات عضوية ومحلية</h1>
                        <p style={{ fontSize: '1.25rem', color: '#3f6212', marginBottom: '2rem' }}>احصل على خصم 20% على طلبك الأول من الفواكه والخضروات الطازجة.</p>
                        <Link to="/demo/supermarket/shop">
                            <button style={{ background: '#1a2e05', color: 'white', padding: '1rem 2rem', borderRadius: '50px', border: 'none', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', fontFamily: '"Cairo", sans-serif' }}>تسوق الآن</button>
                        </Link>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" alt="Veg Basket" style={{ borderRadius: '1rem', transform: 'rotate(-5deg)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)' }} />
                    </div>
                </motion.div>
            </header>

            {/* Categories */}
            <section style={{ padding: '2rem 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Tag size={24} color={color} /> تسوق حسب الفئة
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
                        {[
                            { name: "فواكه", icon: <Apple size={30} /> },
                            { name: "ألبان", icon: <Milk size={30} /> },
                            { name: "مخبز", icon: <Wheat size={30} /> },
                            { name: "لحوم", icon: <Beef size={30} /> },
                            { name: "خضار", icon: <Apple size={30} /> },
                            { name: "عروض", icon: <Tag size={30} /> }
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
        </>
    );
};

export default SupermarketHome;
