import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
    const { t } = useTranslation();
    const sections = t('terms.sections', { returnObjects: true }) as Array<{ heading: string; content: string }>;

    return (
        <div style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '4rem' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass"
                    style={{ padding: '3rem', borderRadius: '1rem' }}
                >
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', marginBottom: '0.5rem' }}>
                        {t('terms.title')}
                    </h1>
                    <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>
                        {t('terms.lastUpdated')}
                    </p>

                    <p style={{ color: '#d1d5db', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.7 }}>
                        {t('terms.intro')}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {sections.map((section, index) => (
                            <div key={index}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#06b6d4', marginBottom: '1rem' }}>
                                    {section.heading}
                                </h2>
                                <p style={{ color: '#d1d5db', lineHeight: 1.7 }}>
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Terms;
