import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Counter from '../components/common/Counter';
import Scene3D from '../components/3d/Scene3D';

import config from '../config';

const Home: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const location = useLocation();

    useEffect(() => {
        // Log visit
        fetch(`${config.API_URL}/visits`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ page: 'Home' })
        }).catch(err => console.error('Error logging visit:', err));

        // Handle hash navigation from other pages
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div className="flex flex-col" style={{ position: 'relative', overflowX: 'hidden' }}>
            <Scene3D />
            {/* Hero Section */}
            <section
                id="home"
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem 1rem',
                    position: 'relative',
                }}
            >
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1rem',
                                borderRadius: '9999px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                marginBottom: '2rem'
                            }}
                        >
                            <Sparkles size={16} style={{ color: '#06b6d4' }} />
                            <span style={{ fontSize: '0.875rem', color: '#d1d5db' }}>{t('hero.badge')}</span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            style={{
                                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                                fontWeight: 700,
                                lineHeight: 1.1,
                                marginBottom: '1.5rem',
                                textAlign: 'center',
                            }}
                        >
                            <span style={{ color: 'white', display: 'block' }}>{t('hero.title_parts.p1')}</span>
                            <span className="text-gradient" style={{ display: 'block' }}>{t('hero.title_parts.p2')}</span>
                            <span style={{ color: 'white', display: 'block' }}>{t('hero.title_parts.p3')}</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            style={{
                                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                                color: '#9ca3af',
                                marginBottom: '2.5rem',
                                maxWidth: '600px',
                                margin: '0 auto 2.5rem auto',
                                lineHeight: 1.6,
                                textAlign: 'center',
                            }}
                        >
                            {t('hero.subtitle')}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '1rem',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: '4rem',
                            }}
                        >
                            <button
                                onClick={() => scrollToSection('services')}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                                    padding: '0.875rem 1.75rem',
                                    borderRadius: '9999px',
                                    color: 'white',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    boxShadow: '0 4px 20px rgba(6, 182, 212, 0.3)',
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                {t('hero.cta')}
                                <ArrowRight size={18} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
                            </button>

                            <button
                                onClick={() => scrollToSection('portfolio')}
                                style={{
                                    padding: '0.875rem 1.75rem',
                                    borderRadius: '9999px',
                                    color: 'white',
                                    fontWeight: 500,
                                    fontSize: '1rem',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    background: 'transparent',
                                    cursor: 'pointer',
                                }}
                            >
                                {t('navbar.portfolio')}
                            </button>
                        </motion.div>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.8 }}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '3rem',
                                flexWrap: 'wrap',
                                marginTop: '1rem',
                            }}
                        >
                            <div style={{ textAlign: 'center', minWidth: '100px' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', textShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}>
                                    <Counter to={10} suffix="+" />
                                </div>
                                <div style={{ fontSize: '0.75rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem' }}>
                                    {t('hero.stats.years')}
                                </div>
                            </div>

                            <div style={{ textAlign: 'center', minWidth: '100px', padding: '0 2rem', borderLeft: '1px solid rgba(255,255,255,0.1)', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', textShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}>
                                    <Counter to={200} suffix="+" />
                                </div>
                                <div style={{ fontSize: '0.75rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem' }}>
                                    {t('hero.stats.projects')}
                                </div>
                            </div>

                            <div style={{ textAlign: 'center', minWidth: '100px' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', textShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}>
                                    <Counter to={150} suffix="+" />
                                </div>
                                <div style={{ fontSize: '0.75rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem' }}>
                                    {t('hero.stats.clients')}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sections */}
            <div id="about">
                <About />
            </div>
            <div id="services">
                <Services />
            </div>
            <div id="portfolio">
                <Portfolio />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
