import React from 'react';
import { Camera, Zap, Share2, Award, Play, ArrowUpRight, Aperture, Layers } from 'lucide-react';
import DemoNavbar from '../../../components/demos/DemoNavbar';
import DemoFooter from '../../../components/demos/DemoFooter';
import { motion } from 'framer-motion';

const AgencyDemo: React.FC = () => {
    const color = "#9333ea"; // Purple-600

    return (
        <div style={{ fontFamily: '"Space Grotesk", sans-serif', background: 'black', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <DemoNavbar
                name="Viral Agency"
                links={["Work", "Services", "Studio", "Contact"]}
                color={color}
                logoIcon={<Camera size={32} />}
            />

            {/* Hero */}
            <header style={{
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-20%',
                    width: '600px',
                    height: '600px',
                    background: color,
                    filter: 'blur(200px)',
                    opacity: 0.4,
                    borderRadius: '50%'
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '-20%',
                    left: '-10%',
                    width: '400px',
                    height: '400px',
                    background: '#ec4899',
                    filter: 'blur(150px)',
                    opacity: 0.3,
                    borderRadius: '50%'
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                        <h1 style={{ fontSize: '7rem', fontWeight: 800, lineHeight: 0.9, marginBottom: '2rem' }}>
                            WE CREATE <br />
                            <span style={{ color: 'transparent', WebkitTextStroke: '2px white' }}>DIGITAL CHAOS</span>
                        </h1>
                        <p style={{ fontSize: '1.5rem', maxWidth: '600px', marginBottom: '3rem', color: '#d1d5db' }}>
                            Award-winning creative agency specializing in viral content, brand strategy, and immersive digital experiences.
                        </p>
                        <button style={{
                            background: 'white',
                            color: 'black',
                            padding: '1.25rem 3rem',
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            borderRadius: '2px'
                        }}>
                            Start Project <ArrowUpRight size={24} />
                        </button>
                    </motion.div>
                </div>
            </header>

            {/* Work Grid (Masonry-ish) */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '4rem', fontWeight: 700, margin: 0 }}>Selected Work</h2>
                        <a href="#" style={{ color: 'white', fontSize: '1.25rem' }}>View All Projects</a>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                        <div style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
                            <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80" alt="Work 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '2rem', background: 'linear-gradient(transparent, black)' }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>Neon Future Campaign</h3>
                                <p style={{ color: '#d1d5db' }}>Art Direction / CGI</p>
                            </div>
                        </div>
                        <div style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
                            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" alt="Work 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '2rem', background: 'linear-gradient(transparent, black)' }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>Tech Noir Product</h3>
                                <p style={{ color: '#d1d5db' }}>Social Media</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem' }}>
                        <div style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
                            <img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=800&q=80" alt="Work 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '2rem', background: 'linear-gradient(transparent, black)' }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>Minimalist Brand</h3>
                                <p style={{ color: '#d1d5db' }}>Branding</p>
                            </div>
                        </div>
                        <div style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
                            <img src="https://images.unsplash.com/photo-1558655146-d09347e0b7a9?w=800&q=80" alt="Work 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '2rem', background: 'linear-gradient(transparent, black)' }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>Abstract Motion</h3>
                                <p style={{ color: '#d1d5db' }}>3D Animation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section style={{ padding: '6rem 0', background: '#111' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                        {[
                            { title: "Brand Identity", icon: <Aperture size={40} />, desc: "We build brands that speak to the soul of the consumer." },
                            { title: "Social Strategy", icon: <Share2 size={40} />, desc: "Viral campaigns that break the internet algorithm." },
                            { title: "Production", icon: <Layers size={40} />, desc: "High-end photography and video production for all platforms." }
                        ].map((s, i) => (
                            <div key={i}>
                                <div style={{ color: color, marginBottom: '1.5rem' }}>{s.icon}</div>
                                <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>{s.title}</h3>
                                <p style={{ fontSize: '1.25rem', color: '#9ca3af', lineHeight: 1.6 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <DemoFooter name="Viral Agency" color={color} />
        </div>
    );
};

export default AgencyDemo;
