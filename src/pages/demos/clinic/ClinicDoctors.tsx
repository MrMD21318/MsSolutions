import React from 'react';
import { motion } from 'framer-motion';

const ClinicDoctors: React.FC = () => {
    const color = "#0284c7";

    const doctors = [
        { name: "د. سارة جونسون", role: "رئيسة قسم القلب", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80" },
        { name: "د. جيمس ويلسون", role: "استشاري طب أطفال", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80" },
        { name: "د. إيملي تشن", role: "أخصائية مخ وأعصاب", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80" },
        { name: "د. مايكل روس", role: "جراح عظام", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&q=80" },
    ];

    return (
        <section style={{ padding: '120px 0 6rem', fontFamily: '"Cairo", sans-serif', direction: 'rtl' }}>
            <div className="container">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span style={{ color: color, fontWeight: 700, fontSize: '1.1rem' }}>فريقنا الطبي</span>
                        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>نخبة من الأطباء المتخصصين</h1>
                        <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', lineHeight: 1.6 }}>
                            فريقنا مكون من أطباء مؤهلين تأهيلاً عالياً ملتزمون بتقديم أفضل رعاية طبية لك ولعائلتك.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                        {doctors.map((doc, i) => (
                            <div key={i} style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.05)', background: 'white', border: '1px solid #f1f5f9', transition: 'transform 0.3s' }}>
                                <div style={{ height: '320px', overflow: 'hidden' }}>
                                    <img src={doc.img} alt={doc.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </div>
                                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>{doc.name}</h3>
                                    <p style={{ color: color, fontWeight: 600, margin: '0 0 1.5rem' }}>{doc.role}</p>
                                    <button style={{ width: '100%', padding: '0.875rem', borderRadius: '0.75rem', background: '#f0f9ff', border: '1px solid #e0f2fe', color: color, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}>
                                        عرض الملف الشخصي
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ClinicDoctors;
