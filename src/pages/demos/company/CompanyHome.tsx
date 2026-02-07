import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, BarChart, Briefcase, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyHome: React.FC = () => {
    const color = "#1e40af";

    return (
        <>
            {/* Hero */}
            <header style={{
                position: 'relative',
                height: '100vh', // Full height
                display: 'flex',
                alignItems: 'center',
                background: '#0f172a',
                color: 'white',
                overflow: 'hidden'
            }}>
                {/* Image Overlay */}
                <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: `linear-gradient(to right, #0f172a, transparent), url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80') center/cover`, opacity: 0.6, zIndex: 0 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '4px', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.2)' }}>
                            <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#60a5fa' }}>رواد الاستشارات العالمية</span>
                        </div>
                        <h1 style={{ fontSize: '4.5rem', fontWeight: 800, margin: '0 0 1.5rem', lineHeight: 1.1, maxWidth: '800px' }}>
                            حلول مؤسسية لـ <span style={{ color: '#60a5fa' }}>العصر الرقمي</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 0 2.5rem', color: '#94a3b8', lineHeight: 1.6 }}>
                            نساعد المؤسسات العالمية على تجاوز التعقيدات وتحقيق نمو مستدام من خلال الابتكار الاستراتيجي.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <Link to="/demo/company/services">
                                <button style={{ background: '#3b82f6', color: 'white', padding: '1rem 2.5rem', fontSize: '1.125rem', border: 'none', borderRadius: '4px', fontWeight: 600, cursor: 'pointer', fontFamily: '"Cairo", sans-serif' }}>
                                    خدماتنا
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Partners */}
            <div style={{ borderBottom: '1px solid #e2e8f0', padding: '2rem 0', background: '#f8fafc' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.5, fontStyle: 'italic', fontSize: '1.5rem', fontWeight: 800, color: '#64748b' }}>
                    <span>ACME Corp</span>
                    <span>GlobalTech</span>
                    <span>Nebula</span>
                    <span>Vertex</span>
                </div>
            </div>

            {/* Services Preview */}
            <section style={{ padding: '8rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
                        <div>
                            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', color: '#0f172a' }}>خبرة استراتيجية</h2>
                            <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.6, marginBottom: '2rem' }}>
                                نستفيد من الرؤى القائمة على البيانات والمعرفة العميقة بالصناعة لحل أصعب تحدياتك.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    "استراتيجية التحول الرقمي",
                                    "تحسين الكفاءة التشغيلية",
                                    "توسع السوق والتحليل",
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 500, color: '#1e293b' }}>
                                        <CheckCircle size={20} color={color} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            {[
                                { title: "تحليلات", icon: <BarChart size={32} /> },
                                { title: "استشارات", icon: <Briefcase size={32} /> },
                                { title: "ابتكار", icon: <Zap size={32} /> },
                                { title: "عالمي", icon: <Globe size={32} /> }
                            ].map((service, i) => (
                                <div key={i} style={{ background: '#f1f5f9', padding: '2rem', borderRadius: '8px' }}>
                                    <div style={{ color: color, marginBottom: '1rem' }}>{service.icon}</div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{service.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CompanyHome;
