import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDigitalSound } from '../../hooks/useDigitalSound';
// @ts-ignore
import logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 30;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const scrollToSection = (id: string) => {
        try {
            if (location.pathname !== '/') {
                if (id === 'home' || id === '/') {
                    navigate('/');
                } else {
                    navigate(`/#${id}`);
                }
            } else {
                if (id === 'home' || id === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            }
            setIsOpen(false);
        } catch (error) {
            console.error("Scroll error:", error);
        }
    };

    const handleNavClick = (path: string) => {
        try {
            playClick();
        } catch (e) {
            console.error("Audio play failed", e);
        }
        scrollToSection(path);
    };

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        setIsOpen(false);
    };

    const navLinks = [
        { name: t('navbar.home'), path: 'home' },
        { name: t('navbar.about'), path: 'about' },
        { name: t('navbar.services'), path: 'services' },
        { name: t('navbar.portfolio'), path: 'portfolio' },
        { name: t('navbar.contact'), path: 'contact' },
    ];

    const { playHover, playClick } = useDigitalSound();

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 9999,
                padding: scrolled ? '0.75rem 0' : '1rem 0',
                background: scrolled ? 'rgba(10, 14, 23, 0.95)' : 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)',
                backdropFilter: scrolled ? 'blur(16px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
                transition: 'all 0.3s ease',
            }}
        >
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    {/* Logo */}
                    <button
                        onClick={() => handleNavClick('home')}
                        onMouseEnter={playHover}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0, background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        <motion.div
                            animate={{
                                y: [0, -5, 0],
                                filter: [
                                    'brightness(0) invert(1) drop-shadow(0 0 0px rgba(6,182,212,0))',
                                    'brightness(0) invert(1) drop-shadow(0 0 10px rgba(6,182,212,0.5))',
                                    'brightness(0) invert(1) drop-shadow(0 0 0px rgba(6,182,212,0))'
                                ]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            whileHover={{
                                scale: 1.1,
                                rotate: 5,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <img
                                src={logo}
                                alt="MS Solutions"
                                style={{ height: '38px', width: 'auto' }}
                            />
                        </motion.div>
                        <span style={{ fontSize: '1.125rem', fontWeight: 700, color: 'white', whiteSpace: 'nowrap' }} className="hidden sm:block">
                            MS <span style={{ color: '#06b6d4' }}>Solutions</span>
                        </span>
                    </button>

                    {/* Desktop Nav - Center */}
                    <div className="hidden lg:flex" style={{ alignItems: 'center', gap: '1.5rem', flex: 1, justifyContent: 'center' }}>
                        {navLinks.map((link) => (
                            <button
                                key={link.path}
                                onClick={() => handleNavClick(link.path)}
                                style={{ color: '#d1d5db', fontSize: '0.875rem', fontWeight: 500, whiteSpace: 'nowrap', transition: 'color 0.3s', background: 'none', border: 'none', cursor: 'pointer' }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; playHover(); }}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="hidden lg:flex" style={{ alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                        <button
                            onClick={() => {
                                try { playClick(); } catch (e) { }
                                toggleLanguage();
                            }}
                            onMouseEnter={playHover}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                borderRadius: '9999px',
                                border: '1px solid rgba(255,255,255,0.2)',
                                background: 'transparent',
                                cursor: 'pointer',
                                fontSize: '0.875rem',
                                color: 'white',
                                fontWeight: 600,
                            }}
                        >
                            <Globe size={14} style={{ color: '#06b6d4' }} />
                            <span>{i18n.language === 'en' ? 'AR' : 'EN'}</span>
                        </button>

                        <button
                            onClick={() => handleNavClick('contact')}
                            onMouseEnter={playHover}
                            style={{
                                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                                padding: '0.5rem 1.25rem',
                                borderRadius: '9999px',
                                color: 'white',
                                fontWeight: 600,
                                fontSize: '0.875rem',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            {t('navbar.getStarted')}
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden"
                        style={{ color: 'white', padding: '0.5rem', background: 'transparent', border: 'none', cursor: 'pointer' }}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(10, 14, 23, 0.98)',
                    backdropFilter: 'blur(20px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    zIndex: 9998,
                }}>
                    <button
                        style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'white', background: 'transparent', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={28} />
                    </button>

                    {navLinks.map((link) => (
                        <button
                            key={link.path}
                            onClick={() => handleNavClick(link.path)}
                            style={{ fontSize: '1.25rem', fontWeight: 500, color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            {link.name}
                        </button>
                    ))}

                    <button
                        onClick={toggleLanguage}
                        style={{
                            marginTop: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '9999px',
                            border: '1px solid rgba(6, 182, 212, 0.5)',
                            color: '#06b6d4',
                            background: 'transparent',
                            cursor: 'pointer',
                        }}
                    >
                        <Globe size={18} />
                        <span>{i18n.language === 'en' ? 'العربية' : 'English'}</span>
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
