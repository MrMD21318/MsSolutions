
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClinicHome: React.FC = () => {
    const color = "#0284c7";

    return (
        <>
            {/* Hero Section */}
            <header style={{
                position: 'relative',
                minHeight: '100vh', // Full height
                display: 'flex',
                alignItems: 'center',
                background: 'white',
                overflow: 'hidden',
                paddingTop: '80px' // Add padding here specifically for Hero content
            }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} style={{ order: 1 }}> {/* Swapped order/animation for RTL */}
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#e0f2fe', padding: '0.5rem 1rem', borderRadius: '99px', color: color, fontWeight: 600, marginBottom: '2rem' }}>
                            <ShieldCheck size={20} /> رعاية صحية موثوقة
                        </div>
                        <h1 style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.1, color: '#0f172a', marginBottom: '1.5rem' }}>
                            صحتكم هي <span style={{ color: color }}>أولويتنا</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#64748b', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '550px' }}>
                            جرب رعاية طبية عالمية المستوى مع فريقنا من الأطباء المتخصصين وأحدث المرافق.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Link to="/demo/clinic/appointment">
                                <button style={{
                                    background: color, color: 'white', padding: '1rem 2rem', borderRadius: '0.5rem', border: 'none',
                                    fontSize: '1.125rem', fontWeight: 600, cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(2, 132, 199, 0.3)', fontFamily: '"Cairo", sans-serif'
                                }}>
                                    احجز موعداً
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ position: 'relative', order: 2 }}> {/* Swapped order/animation for RTL */}
                        <img
                            src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&q=80"
                            alt="Doctor"
                            style={{
                                width: '100%',
                                borderRadius: '2rem',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                                position: 'relative',
                                zIndex: 1
                            }}
                        />
                    </motion.div>
                </div>
            </header>

            {/* Stats */}
            <section style={{ padding: '6rem 0', background: 'white' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                    {[
                        { num: "١٥+", label: "عاماً من الخبرة" },
                        { num: "٥٠+", label: "طبيب متخصص" },
                        { num: "١٠ آلاف+", label: "مريض سعيد" },
                        { num: "٢٤/٧", label: "خدمة طوارئ" }
                    ].map((stat, i) => (
                        <div key={i} style={{ minWidth: '150px' }}>
                            <div style={{ fontSize: '3.5rem', fontWeight: 800, color: color, marginBottom: '0.5rem' }}>{stat.num}</div>
                            <div style={{ color: '#64748b', fontWeight: 600, fontSize: '1.1rem' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ClinicHome;
