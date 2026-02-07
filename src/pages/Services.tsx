import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, ShoppingCart, Server, Bot } from 'lucide-react';

const Services: React.FC = () => {
    const { t } = useTranslation();

    const services = [
        {
            id: 'web',
            icon: <Code size={36} style={{ color: '#06b6d4' }} />,
            title: t('services.web_dev'),
            desc: t('services.web_dev_desc'),
            gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))',
            borderColor: '#06b6d4',
        },
        {
            id: 'ecommerce',
            icon: <ShoppingCart size={36} style={{ color: '#8b5cf6' }} />,
            title: t('services.ecommerce'),
            desc: t('services.ecommerce_desc'),
            gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
            borderColor: '#8b5cf6',
        },
        {
            id: 'systems',
            icon: <Server size={36} style={{ color: '#10b981' }} />,
            title: t('services.systems'),
            desc: t('services.systems_desc'),
            gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))',
            borderColor: '#10b981',
        },
        {
            id: 'ai',
            icon: <Bot size={36} style={{ color: '#f43f5e' }} />,
            title: t('services.ai'),
            desc: t('services.ai_desc'),
            gradient: 'linear-gradient(135deg, rgba(244, 63, 94, 0.1), rgba(249, 115, 22, 0.1))',
            borderColor: '#f43f5e',
        }
    ];

    return (
        <section style={{ minHeight: '100vh', padding: '2rem 1rem' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
                        {t('services.title')}
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: '#9ca3af', maxWidth: '600px', margin: '0 auto' }}>
                        {t('services.subtitle')}
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gap: '1.5rem' }} className="md:grid-cols-2">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass"
                            style={{
                                padding: '2rem',
                                borderRadius: '1rem',
                                borderLeft: `3px solid ${service.borderColor}`,
                                background: service.gradient,
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                width: '4rem',
                                height: '4rem',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '0.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>
                                {service.title}
                            </h3>
                            <p style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
