import React from 'react';
import { Building, BarChart3, Globe, CheckCircle, Briefcase, Zap } from 'lucide-react';
import DemoNavbar from '../../../components/demos/DemoNavbar';
import DemoFooter from '../../../components/demos/DemoFooter';
import { motion } from 'framer-motion';

const CompanyDemo: React.FC = () => {
    const color = "#1e40af"; // Blue-800

    return (
        <div style={{ fontFamily: '"Inter", sans-serif', background: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <DemoNavbar
                name="Corporate Pro"
                links={[{ name: "About", path: "#about" }, { name: "Solutions", path: "#solutions" }, { name: "Clients", path: "#clients" }, { name: "Contact", path: "#contact" }]}
                color={color}
                logoIcon={<Building size={32} />}
            />

            {/* Hero */}
            <header style={{
                position: 'relative',
                height: '85vh',
                display: 'flex',
                alignItems: 'center',
                background: '#0f172a',
                color: 'white',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: `linear-gradient(to right, #0f172a, transparent), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80') center/cover`, opacity: 0.5 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '4px', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.2)' }}>
                            <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#60a5fa' }}>Global Leaders in Consulting</span>
                        </div>
                        <h1 style={{ fontSize: '4.5rem', fontWeight: 800, margin: '0 0 1.5rem', lineHeight: 1.1, maxWidth: '800px' }}>
                            Enterprise Solutions for the <span style={{ color: '#60a5fa' }}>Digital Age</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 0 2.5rem', color: '#94a3b8', lineHeight: 1.6 }}>
                            We help world-class organizations navigate complexity and drive sustainable growth through strategic innovation.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <button style={{ background: '#3b82f6', color: 'white', padding: '1rem 2.5rem', fontSize: '1.125rem', border: 'none', borderRadius: '4px', fontWeight: 600, cursor: 'pointer' }}>
                                Our Services
                            </button>
                            <button style={{ background: 'transparent', color: 'white', padding: '1rem 2.5rem', fontSize: '1.125rem', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '4px', fontWeight: 600, cursor: 'pointer' }}>
                                Contact Sales
                            </button>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Partners/Logos */}
            <div style={{ borderBottom: '1px solid #e2e8f0', padding: '2rem 0', background: '#f8fafc' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.5, fontStyle: 'italic', fontSize: '1.5rem', fontWeight: 800, color: '#64748b' }}>
                    <span>ACME Corp</span>
                    <span>GlobalTech</span>
                    <span>Nebula</span>
                    <span>Vertex</span>
                    <span>Horizon</span>
                </div>
            </div>

            {/* Services */}
            <section style={{ padding: '8rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
                        <div>
                            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', color: '#0f172a' }}>Strategic Expertise</h2>
                            <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.6, marginBottom: '2rem' }}>
                                We leverage data-driven insights and deep industry knowledge to solve your toughest challenges.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    "Digital Transformation Strategy",
                                    "Operational Efficiency Optimization",
                                    "Market Expansion & Analysis",
                                    "Mergers & Acquisitions Support"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 500, color: '#1e293b' }}>
                                        <CheckCircle size={20} color={color} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            {[
                                { title: "Analytics", icon: <BarChart3 size={32} /> },
                                { title: "Consulting", icon: <Briefcase size={32} /> },
                                { title: "Innovation", icon: <Zap size={32} /> },
                                { title: "Global", icon: <Globe size={32} /> }
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

            {/* CTA */}
            <section style={{ padding: '6rem 0', background: '#0f172a', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Ready to Scale Your Business?</h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        Schedule a consultation with our senior partners today.
                    </p>
                    <button style={{ background: 'white', color: '#0f172a', padding: '1rem 3rem', borderRadius: '4px', border: 'none', fontWeight: 700, fontSize: '1.125rem', cursor: 'pointer' }}>Let's Talk</button>
                </div>
            </section>

            <DemoFooter name="Corporate Pro" color={color} />
        </div>
    );
};

export default CompanyDemo;
