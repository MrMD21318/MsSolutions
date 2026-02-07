import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface DemoNavbarProps {
    name: string;
    links: { name: string; path: string }[];
    color: string;
    logoIcon?: React.ReactNode;
    actionBtn?: { text: string; path: string };
    isDarkHero?: boolean;
}

const DemoNavbar: React.FC<DemoNavbarProps> = ({ name, links, color, logoIcon, actionBtn, isDarkHero = false }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine text color based on scroll state and background type
    const getTextColor = () => {
        if (isScrolled) return '#1f2937'; // Gray-800 when scrolled
        if (isDarkHero) return 'white';   // White on dark hero
        return '#1f2937';                 // Gray-800 on light hero
    };

    const textColor = getTextColor();

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-100'
                        : 'bg-transparent py-6'
                    }`}
                style={{
                    fontFamily: '"Cairo", sans-serif',
                    direction: 'rtl'
                }}
            >
                <div className="container flex items-center justify-between">
                    <Link
                        to={links[0]?.path || "#"}
                        className="flex items-center gap-2 text-2xl font-bold transition-transform hover:scale-105"
                        style={{ color: isScrolled ? iconColor(color) : textColor, textDecoration: 'none' }}
                    >
                        <span style={{ color: isScrolled ? color : (isDarkHero ? 'white' : color) }}>
                            {logoIcon}
                        </span>
                        <span style={{ color: textColor }}>{name}</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="font-medium transition-all relative group"
                                style={{
                                    color: textColor,
                                    textDecoration: 'none',
                                    fontWeight: 500
                                }}
                            >
                                <span className="relative z-10 hover:opacity-80">{link.name}</span>
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 right-0 -bottom-1 h-0.5 rounded-full"
                                        style={{ background: isScrolled ? color : (isDarkHero ? 'white' : color) }}
                                    />
                                )}
                            </Link>
                        ))}
                        {actionBtn && (
                            <Link to={actionBtn.path}>
                                <button style={{
                                    background: color,
                                    color: 'white',
                                    padding: '0.6rem 1.75rem',
                                    borderRadius: '50px',
                                    fontWeight: 700,
                                    border: 'none',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                    fontFamily: '"Cairo", sans-serif',
                                    transition: 'transform 0.2s',
                                    fontSize: '0.95rem'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    {actionBtn.text}
                                </button>
                            </Link>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden" onClick={() => setMobileMenuOpen(true)} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                        <Menu color={textColor} size={28} />
                    </button>
                </div>
            </motion.nav>

            {/* Back to Portfolio Floating Button */}
            <Link to="/" style={{
                position: 'fixed',
                bottom: '2rem',
                left: '2rem',
                right: 'auto',
                background: '#ffffff',
                color: '#0f172a',
                padding: '0.75rem 1.5rem',
                borderRadius: '99px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 700,
                zIndex: 100,
                fontFamily: '"Cairo", sans-serif',
                direction: 'rtl',
                border: '1px solid #e2e8f0',
                transition: 'transform 0.2s'
            }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
                <ArrowLeft size={18} className="rotate-180 text-gray-400" />
                العودة للمعرض
            </Link>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-0 z-[60] bg-white flex flex-col justify-center items-center gap-8"
                    >
                        <button className="absolute top-6 right-6" onClick={() => setMobileMenuOpen(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                            <X size={32} color="#1f2937" />
                        </button>
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-bold"
                                style={{ color: location.pathname === link.path ? color : '#1f2937', textDecoration: 'none' }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );

    function iconColor(c: string) {
        return c; // Helper to pass color if needed, but we handle it inline mostly
    }
};

export default DemoNavbar;
