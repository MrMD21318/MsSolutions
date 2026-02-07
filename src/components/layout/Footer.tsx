import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, User, Link as LinkIcon, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
// @ts-ignore
import logo from '../../assets/logo.png';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: t('navbar.about'), path: '#about' },
        { name: t('navbar.services'), path: '#services' },
        { name: t('navbar.portfolio'), path: '#portfolio' },
        { name: t('navbar.contact'), path: '#contact' },
    ];

    return (
        <footer style={{
            borderTop: '1px solid #e5e7eb',
            background: '#ffffff',
            marginTop: 'auto',
            position: 'relative',
            zIndex: 10,
        }}>
            <div className="container" style={{ padding: '3rem 1.5rem' }}>
                <div style={{ display: 'grid', gap: '2.5rem' }} className="md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand Column */}
                    <div style={{ gridColumn: 'span 1' }} className="lg:col-span-2">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <img src={logo} alt="MS Solutions" style={{ height: '32px', width: 'auto' }} />
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', margin: 0 }}>
                                MS <span style={{ color: '#06b6d4' }}>Solutions</span>
                            </h3>
                        </div>
                        <p style={{ color: '#4b5563', marginBottom: '1.5rem', maxWidth: '320px', lineHeight: 1.7, fontSize: '0.9rem' }}>
                            Transforming businesses through innovative web development, enterprise systems, and AI-powered solutions.
                        </p>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            {[Globe, User, LinkIcon].map((Icon, i) => (
                                <a key={i} href="#" style={{
                                    padding: '0.625rem',
                                    borderRadius: '0.5rem',
                                    background: '#f3f4f6',
                                    color: '#4b5563',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s',
                                    border: '1px solid #e5e7eb'
                                }}>
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: '#111827', fontWeight: 600, marginBottom: '1.25rem', fontSize: '1rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {footerLinks.map(link => (
                                <li key={link.path} style={{ marginBottom: '0.75rem' }}>
                                    <Link to={link.path} style={{ color: '#6b7280', fontSize: '0.875rem', transition: 'color 0.3s' }}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ color: '#111827', fontWeight: 600, marginBottom: '1.25rem', fontSize: '1rem' }}>Contact</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                                <Mail size={14} style={{ color: '#06b6d4', marginTop: '3px', flexShrink: 0 }} />
                                <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>info@msforsolutions.com</span>
                            </li>

                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                <Phone size={14} style={{ color: '#06b6d4', marginTop: '3px', flexShrink: 0 }} />
                                <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>+962 79587 3457</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    marginTop: '2.5rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid #e5e7eb',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    alignItems: 'center',
                    textAlign: 'center',
                }} className="md:flex-row md:justify-between">
                    <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                        © {currentYear} MS Solutions. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <Link to="/privacy" style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{t('footer.privacy')}</Link>
                        <Link to="/terms" style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{t('footer.terms')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
