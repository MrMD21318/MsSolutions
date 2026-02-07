import React from 'react';
import { motion } from 'framer-motion';

const AgencyWork: React.FC = () => {
    return (
        <section style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: '5rem', fontWeight: 800, marginBottom: '4rem' }}>Our Work</motion.h1>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    {[
                        { title: "Cyber Punk", img: "https://images.unsplash.com/photo-1515630278258-407f66498911?w=800&q=80" },
                        { title: "Retro Wave", img: "https://images.unsplash.com/photo-1550184658-ff6132a71714?w=800&q=80" },
                        { title: "Glitch Art", img: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=800&q=80" },
                        { title: "Abstract", img: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=800&q=80" }
                    ].map((item, i) => (
                        <motion.div key={i} whileHover={{ scale: 0.98 }} style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
                            <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s' }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AgencyWork;
