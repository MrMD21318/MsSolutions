import React from 'react';
import { Library, FlaskConical, Gavel, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

const UniversityFaculties: React.FC = () => {
    const color = "#7c3aed";

    const faculties = [
        { title: "Arts & Humanities", icon: <Library size={40} />, img: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=800&q=80" },
        { title: "Science & Technology", icon: <FlaskConical size={40} />, img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80" },
        { title: "Business & Law", icon: <Gavel size={40} />, img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" },
        { title: "Medicine & Health", icon: <Stethoscope size={40} />, img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" }
    ];

    return (
        <section style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem', color: '#1f2937' }}
                >
                    Academic Faculties
                </motion.h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {faculties.map((faculty, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}
                            style={{ cursor: 'pointer' }}
                            className="group"
                        >
                            <div style={{ height: '300px', overflow: 'hidden', borderRadius: '8px', marginBottom: '1.5rem', position: 'relative' }}>
                                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', transition: 'background 0.3s', zIndex: 1 }}></div>
                                <img src={faculty.img} alt={faculty.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', color: 'white', zIndex: 2 }}>
                                    <div style={{ background: color, padding: '0.5rem', borderRadius: '4px', display: 'inline-block', marginBottom: '0.5rem' }}>
                                        {faculty.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.75rem', fontWeight: 700 }}>{faculty.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UniversityFaculties;
