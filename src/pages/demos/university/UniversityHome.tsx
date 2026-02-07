import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const UniversityHome: React.FC = () => {
    const color = "#7c3aed";

    return (
        <>
            {/* Hero */}
            {/* Hero */}
            <header style={{
                position: 'relative',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                overflow: 'hidden'
            }}>
                {/* Background Image */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(124, 58, 237, 0.8), rgba(88, 28, 135, 0.8))', zIndex: 1 }}></div>
                    <img
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80"
                        alt="University Campus"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                <div className="container" style={{ zIndex: 10 }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.3)', padding: '0.5rem 1.5rem', borderRadius: '50px', marginBottom: '2rem', background: 'rgba(0,0,0,0.2)' }}>
                            <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>نصنع المستقبل</span>
                        </div>
                        <h1 style={{ fontSize: '5rem', fontWeight: 700, margin: '0 0 2rem', lineHeight: 1.1 }}>المعرفة من أجل<br />عالم أفضل</h1>
                        <p style={{ fontSize: '1.5rem', maxWidth: '700px', margin: '0 auto 3rem', opacity: 0.9 }}>
                            انضم إلى مجتمع متنوع من المبتكرين والقادة.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                            <Link to="/demo/university/faculties">
                                <button style={{ background: 'white', color: color, padding: '1rem 3rem', fontSize: '1.125rem', border: 'none', fontWeight: 700, borderRadius: '4px', cursor: 'pointer', fontFamily: '"Cairo", sans-serif' }}>
                                    تصفح البرامج
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Stats Bar */}
            <div style={{ background: 'white', padding: '3rem 0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', position: 'relative', zIndex: 10, marginTop: '-3rem', width: '90%', margin: '-3rem auto 0', borderRadius: '8px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
                    {[
                        { num: "50+", label: "برنامج أكاديمي", icon: <BookOpen size={24} /> },
                        { num: "#1", label: "في الابتكار", icon: <Award size={24} /> },
                        { num: "20k", label: "طالب", icon: <Users size={24} /> },
                        { num: "95%", label: "معدل توظيف", icon: <Globe size={24} /> }
                    ].map((stat, i) => (
                        <div key={i} style={{ borderLeft: i !== 3 ? '1px solid #e5e7eb' : 'none', borderRight: 'none' }}>
                            <div style={{ color: color, marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1f2937' }}>{stat.num}</div>
                            <div style={{ color: '#6b7280', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default UniversityHome;
