import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AgencyHome: React.FC = () => {
    const color = "#9333ea";

    return (
        <>
            {/* Hero */}
            <header style={{
                position: 'relative',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                background: '#000'
            }}>
                <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: '600px', height: '600px', background: color, filter: 'blur(200px)', opacity: 0.4, borderRadius: '50%', zIndex: 0 }}></div>
                <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '400px', height: '400px', background: '#ec4899', filter: 'blur(150px)', opacity: 0.3, borderRadius: '50%', zIndex: 0 }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                        <h1 style={{ fontSize: '7rem', fontWeight: 800, lineHeight: 0.9, marginBottom: '2rem' }}>
                            نخلق <br />
                            <span style={{ color: 'transparent', WebkitTextStroke: '2px white' }}>الفوضى الرقمية</span>
                        </h1>
                        <p style={{ fontSize: '1.5rem', maxWidth: '600px', marginBottom: '3rem', color: '#d1d5db' }}>
                            وكالة إبداعية حائزة على جوائز متخصصة في المحتوى الفيروسي، واستراتيجية العلامة التجارية، والتجارب الرقمية الغامرة.
                        </p>
                        <Link to="/demo/agency/services">
                            <button style={{
                                background: 'white', color: 'black', padding: '1.25rem 3rem', fontSize: '1.25rem', fontWeight: 700,
                                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '2px', fontFamily: '"Cairo", sans-serif'
                            }}>
                                ابدأ مشروعك <ArrowUpRight size={24} className="rotate-180" />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </header>

            {/* Selected Work Preview */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '4rem', fontWeight: 700, margin: 0 }}>أعمال مختارة</h2>
                        <Link to="/demo/agency/work" style={{ color: 'white', fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            عرض كل المشاريع <ArrowRight size={20} className="rotate-180" />
                        </Link>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
                        <div style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
                            <img src="https://images.unsplash.com/photo-1492551557933-34265f7af79e?w=800&q=80" alt="Work 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: 0, right: 0, padding: '2rem', background: 'linear-gradient(transparent, black)', textAlign: 'right', width: '100%' }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>نيون فيوتشر</h3>
                            </div>
                        </div>
                        <div style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
                            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" alt="Work 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: 0, right: 0, padding: '2rem', background: 'linear-gradient(transparent, black)', textAlign: 'right', width: '100%' }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>تك نوار</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AgencyHome;
