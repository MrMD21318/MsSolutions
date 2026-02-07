import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Baby, Activity, Bone, Eye } from 'lucide-react';

const ClinicServices: React.FC = () => {
    const color = "#0284c7";

    const services = [
        { icon: <Heart size={40} />, title: "طب القلب", desc: "تشخيص وعلاج شامل لأمراض القلب والأوعية الدموية بأحدث التقنيات." },
        { icon: <Brain size={40} />, title: "المخ والأعصاب", desc: "رعاية متخصصة للاضطرابات العصبية بما في ذلك الصرع والسكتات الدماغية." },
        { icon: <Baby size={40} />, title: "طب الأطفال", desc: "رعاية صحية متكاملة للرضع والأطفال والمراهقين في بيئة ودية." },
        { icon: <Bone size={40} />, title: "العظام والمفاصل", desc: "علاج الكسور والتهابات المفاصل وإجراء العمليات الجراحية الدقيقة." },
        { icon: <Eye size={40} />, title: "طب العيون", desc: "فحص النظر وعلاج أمراض العيون وجراحات الليزك وتصحيح البصر." },
        { icon: <Activity size={40} />, title: "الطب العام", desc: "الفحوصات الروتينية والرعاية الأولية وإدارة الأمراض المزمنة." }
    ];

    return (
        <section style={{ padding: '120px 0 6rem', fontFamily: '"Cairo", sans-serif', direction: 'rtl' }}>
            <div className="container">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span style={{ color: color, fontWeight: 700, fontSize: '1.1rem' }}>رعاية شاملة</span>
                        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>خدماتنا الطبية</h1>
                        <p style={{ color: '#64748b', maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', lineHeight: 1.6 }}>
                            نقدم مجموعة واسعة من الخدمات الطبية المتخصصة لتلبية احتياجاتك الصحية بأعلى معايير الجودة.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {services.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                style={{
                                    background: 'white',
                                    padding: '2.5rem',
                                    borderRadius: '1.5rem',
                                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                                    border: '1px solid #e2e8f0'
                                }}
                            >
                                <div style={{
                                    background: '#f0f9ff',
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: color,
                                    marginBottom: '1.5rem'
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>{item.title}</h3>
                                <p style={{ color: '#64748b', lineHeight: 1.6 }}>{item.desc}</p>
                                <button style={{
                                    marginTop: '1.5rem',
                                    background: 'transparent',
                                    border: 'none',
                                    color: color,
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontSize: '1rem'
                                }}>
                                    اقرأ المزيد &larr;
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default ClinicServices;
