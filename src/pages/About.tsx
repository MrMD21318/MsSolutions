import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Zap, Award, Shield } from 'lucide-react';

const About: React.FC = () => {
    const { t } = useTranslation();

    const features = [
        { icon: <Target size={24} />, title: t('about.features.list.precision.title'), desc: t('about.features.list.precision.desc') },
        { icon: <Zap size={24} />, title: t('about.features.list.speed.title'), desc: t('about.features.list.speed.desc') },
        { icon: <Shield size={24} />, title: t('about.features.list.security.title'), desc: t('about.features.list.security.desc') },
        { icon: <Users size={24} />, title: t('about.features.list.user_centric.title'), desc: t('about.features.list.user_centric.desc') },
        { icon: <Lightbulb size={24} />, title: t('about.features.list.innovation.title'), desc: t('about.features.list.innovation.desc') },
        { icon: <Award size={24} />, title: t('about.features.list.excellence.title'), desc: t('about.features.list.excellence.desc') },
    ];

    return (
        <section className="container" style={{ padding: '6rem 1.5rem', position: 'relative' }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'rgba(6, 182, 212, 0.15)',
                filter: 'blur(100px)',
                borderRadius: '50%',
                zIndex: -1,
            }}></div>

            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        fontWeight: 700,
                        color: 'white',
                        marginBottom: '1rem',
                        textShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
                    }}>
                        {t('about.title')} <span style={{ color: '#06b6d4', textShadow: '0 0 20px rgba(6, 182, 212, 0.6)' }}>MS Solutions</span>
                    </h2>
                    <div style={{
                        width: '80px',
                        height: '4px',
                        background: 'linear-gradient(90deg, #06b6d4, #8b5cf6)',
                        margin: '0 auto 2rem auto',
                        borderRadius: '2px',
                        boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)'
                    }}></div>
                    <p style={{
                        color: '#9ca3af',
                        fontSize: '1.25rem',
                        maxWidth: '700px',
                        margin: '0 auto',
                        lineHeight: 1.7
                    }}>
                        {t('about.description')}
                    </p>
                </motion.div>

                {/* Mission/Vision/Values Cards - Professional Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginBottom: '5rem'
                }}>
                    {[
                        { title: t('about.mission.title'), desc: t('about.mission.desc'), color: '#06b6d4' },
                        { title: t('about.vision.title'), desc: t('about.vision.desc'), color: '#8b5cf6' },
                        { title: t('about.values.title'), desc: t('about.values.items', { returnObjects: true }), color: '#ec4899', isList: true }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{
                                background: 'rgba(17, 24, 39, 0.6)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '1rem',
                                padding: '2.5rem',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: `0 0 0 1px rgba(${parseInt(item.color.slice(1, 3), 16)}, ${parseInt(item.color.slice(3, 5), 16)}, ${parseInt(item.color.slice(5, 7), 16)}, 0.1), 0 10px 30px -10px rgba(0,0,0,0.5)`,
                            }}
                            whileHover={{
                                y: -5,
                                boxShadow: `0 0 0 1px ${item.color}, 0 20px 40px -10px rgba(${parseInt(item.color.slice(1, 3), 16)}, ${parseInt(item.color.slice(3, 5), 16)}, ${parseInt(item.color.slice(5, 7), 16)}, 0.3)`
                            }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '12px',
                                background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                border: `1px solid ${item.color}40`,
                                boxShadow: `0 0 20px ${item.color}30`
                            }}>
                                {index === 0 && <Target size={30} color={item.color} />}
                                {index === 1 && <Lightbulb size={30} color={item.color} />}
                                {index === 2 && <Award size={30} color={item.color} />}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>{item.title}</h3>
                            {item.isList ? (
                                <ul style={{ paddingLeft: '1.2rem', color: '#9ca3af', lineHeight: 1.6 }}>
                                    {(item.desc as any).map((val: string, i: number) => <li key={i}>{val}</li>)}
                                </ul>
                            ) : (
                                <p style={{ color: '#9ca3af', lineHeight: 1.6 }}>{item.desc as string}</p>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'rgba(255,255,255,0.02)',
                        borderRadius: '1.5rem',
                        padding: '3rem',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}
                >
                    <h3 style={{ textAlign: 'center', color: 'white', fontSize: '1.75rem', fontWeight: 700, marginBottom: '3rem', direction: 'inherit' }}>
                        {t('about.features.title_p1')} <span style={{ color: '#06b6d4' }}>{t('about.features.title_p2')}</span>
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {features.map((feature, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    background: 'rgba(6, 182, 212, 0.1)',
                                    color: '#06b6d4'
                                }}>
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '0.5rem' }}>{feature.title}</h4>
                                    <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.5 }}>{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
