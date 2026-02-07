import React from 'react';
import { Mail, Phone, MapPin, Globe, User, Link as LinkIcon, Send } from 'lucide-react';

interface DemoFooterProps {
    name: string;
    color: string;
}

const DemoFooter: React.FC<DemoFooterProps> = ({ name, color }) => {
    return (
        <footer style={{ background: '#111827', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    {/* Brand */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>{name}</h3>
                        <p style={{ color: '#9ca3af', lineHeight: 1.6, marginBottom: '2rem' }}>
                            Providing excellence and quality service to our customers. Building a better future together.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[Globe, User, LinkIcon].map((Icon, i) => (
                                <a key={i} href="#" style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    padding: '0.5rem',
                                    borderRadius: '50%',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'background 0.3s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = color}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 style={{ fontWeight: 700, color: 'white', marginBottom: '1.5rem' }}>Services</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9ca3af', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li>Overview</li>
                            <li>Pricing</li>
                            <li>Case Studies</li>
                            <li>Reviews</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 style={{ fontWeight: 700, color: 'white', marginBottom: '1.5rem' }}>Company</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9ca3af', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>News</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 style={{ fontWeight: 700, color: 'white', marginBottom: '1.5rem' }}>Newsletter</h4>
                        <p style={{ color: '#9ca3af', marginBottom: '1rem', fontSize: '0.9rem' }}>Subscribe for the latest updates.</p>
                        <div style={{ display: 'flex' }}>
                            <input type="email" placeholder="Enter email" style={{
                                padding: '0.5rem',
                                borderRadius: '0.375rem 0 0 0.375rem',
                                border: '1px solid #d1d5db',
                                borderRight: 'none',
                                outline: 'none',
                                width: '100%'
                            }} />
                            <button style={{
                                background: color,
                                color: 'white',
                                padding: '0.5rem 1rem',
                                borderRadius: '0 0.375rem 0.375rem 0',
                                border: 'none',
                                fontWeight: 600,
                                cursor: 'pointer'
                            }}>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb', textAlign: 'center', color: '#9ca3af', fontSize: '0.875rem' }}>
                    © {new Date().getFullYear()} {name}. All rights reserved. Demo by MS Solutions.
                </div>
            </div>
        </footer>
    );
};

export default DemoFooter;
