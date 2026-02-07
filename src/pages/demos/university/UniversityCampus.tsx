import React from 'react';
import { motion } from 'framer-motion';

const UniversityCampus: React.FC = () => {
    return (
        <section style={{ padding: '6rem 0', background: 'white' }}>
            <div className="container">
                <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem', color: '#1f2937' }}>
                    Campus Life
                </motion.h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', gridAutoRows: '300px' }}>
                    <div style={{ gridColumn: 'span 2', overflow: 'hidden', borderRadius: '8px' }}>
                        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" alt="Library" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ overflow: 'hidden', borderRadius: '8px' }}>
                        <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80" alt="Students" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ overflow: 'hidden', borderRadius: '8px' }}>
                        <img src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80" alt="Campus Green" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ gridColumn: 'span 2', overflow: 'hidden', borderRadius: '8px' }}>
                        <img src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80" alt="Sports" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UniversityCampus;
