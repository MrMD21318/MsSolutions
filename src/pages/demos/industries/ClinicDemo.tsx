import React from 'react';
import { Heart, Activity, Phone, Users, Stethoscope, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import DemoNavbar from '../../../components/demos/DemoNavbar';
import DemoFooter from '../../../components/demos/DemoFooter';
import { motion } from 'framer-motion';

const ClinicDemo: React.FC = () => {
    const color = "#0284c7"; // Sky-600

    return (
        <div style={{ fontFamily: '"Inter", sans-serif', background: '#f0f9ff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <DemoNavbar
                name="MediCare Plus"
                links={[{ name: "Services", path: "#services" }, { name: "Doctors", path: "#doctors" }, { name: "Patients", path: "#patients" }, { name: "Contact", path: "#contact" }]}
                color={color}
                logoIcon={<Activity size={32} />}
            />

            {/* Hero Section */}
            <header style={{
                position: 'relative',
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
                background: 'white',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#e0f2fe', padding: '0.5rem 1rem', borderRadius: '99px', color: color, fontWeight: 600, marginBottom: '2rem' }}>
                            <ShieldCheck size={20} /> Trusted Healthcare Provider
                        </div>
                        <h1 style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.1, color: '#0f172a', marginBottom: '1.5rem' }}>
                            Your Health is Our <span style={{ color: color }}>Priority</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#64748b', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '550px' }}>
                            Experience world-class medical care with our team of specialized doctors and state-of-the-art facilities. We are here for you 24/7.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button style={{
                                background: color,
                                color: 'white',
                                padding: '1rem 2rem',
                                borderRadius: '0.5rem',
                                border: 'none',
                                fontSize: '1.125rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                boxShadow: `0 10px 15px -3px ${color}40`,
                                transition: 'transform 0.2s'
                            }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                Book Appointment
                            </button>
                            <button style={{
                                background: 'white',
                                color: '#0f172a',
                                padding: '1rem 2rem',
                                borderRadius: '0.5rem',
                                border: '1px solid #e2e8f0',
                                fontSize: '1.125rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <Phone size={20} /> Emergency: 911
                            </button>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            top: '-10%',
                            right: '-10%',
                            width: '120%',
                            height: '120%',
                            background: 'radial-gradient(circle, #e0f2fe 0%, transparent 70%)',
                            zIndex: -1
                        }}></div>
                        <img
                            src="https://images.unsplash.com/photo-1622253692010-333188c1c63c?w=800&q=80"
                            alt="Doctor"
                            style={{
                                width: '100%',
                                borderRadius: '2rem',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                                position: 'relative',
                                zIndex: 1
                            }}
                        />
                        {/* Float Card */}
                        <div style={{
                            position: 'absolute',
                            bottom: '3rem',
                            left: '-2rem',
                            background: 'white',
                            padding: '1.5rem',
                            borderRadius: '1rem',
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                            zIndex: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <div style={{ background: '#dcfce7', padding: '0.75rem', borderRadius: '50%', color: '#16a34a' }}>
                                <Users size={24} />
                            </div>
                            <div>
                                <div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#0f172a' }}>10k+</div>
                                <div style={{ color: '#64748b', fontSize: '0.875rem' }}>Happy Patients</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Departments Grid */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Specialized Departments</h2>
                        <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>Comprehensive specialized medical care across varying disciplines.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "General Practice", icon: <Stethoscope size={32} />, desc: "Primary healthcare for all ages." },
                            { title: "Cardiology", icon: <Heart size={32} />, desc: "Advanced heart care and surgery." },
                            { title: "Pediatrics", icon: <Users size={32} />, desc: "Specialized care for infants and children." },
                            { title: "Emergency Care", icon: <Activity size={32} />, desc: "24/7 urgent medical attention." }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                style={{
                                    background: 'white',
                                    padding: '2.5rem',
                                    borderRadius: '1rem',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                    border: '1px solid #e2e8f0',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div style={{
                                    background: '#f0f9ff',
                                    width: '4rem',
                                    height: '4rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '1rem',
                                    color: color,
                                    marginBottom: '1.5rem'
                                }}>
                                    {service.icon}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>{service.title}</h3>
                                <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '0.95rem' }}>{service.desc}</p>
                                <a href="#" style={{ display: 'inline-flex', alignItems: 'center', marginTop: '1.5rem', color: color, fontWeight: 600, textDecoration: 'none', gap: '0.25rem' }}>
                                    Learn More <ArrowRight size={16} />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Doctors */}
            <section style={{ padding: '6rem 0', background: 'white' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Meet Our Specialists</h2>
                            <p style={{ color: '#64748b' }}>Top-rated doctors dedicated to your health.</p>
                        </div>
                        <button style={{ background: 'transparent', border: `1px solid ${color}`, color: color, padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 600, cursor: 'pointer' }}>View All Doctors</button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {[
                            { name: "Dr. Sarah Johnson", role: "Chief Cardiologist", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80" },
                            { name: "Dr. James Wilson", role: "Senior Pediatrician", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80" },
                            { name: "Dr. Emily Chen", role: "Neurologist", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80" }
                        ].map((doc, i) => (
                            <div key={i} style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)', background: 'white', border: '1px solid #e5e7eb' }}>
                                <img src={doc.img} alt={doc.name} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>{doc.name}</h3>
                                    <p style={{ color: color, fontWeight: 500, margin: '0.25rem 0 1rem' }}>{doc.role}</p>
                                    <button style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: '#f8fafc', border: 'none', color: '#475569', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s' }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = '#e2e8f0'}
                                        onMouseLeave={(e) => e.currentTarget.style.background = '#f8fafc'}>Book Appointment</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Appointment CTA */}
            <section style={{ padding: '6rem 0', background: color, color: 'white' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>Need Immediate Care?</h2>
                        <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2.5rem', lineHeight: 1.6 }}>
                            Skip the waiting room. Book your appointment online today or call our emergency line for urgent assistance.
                        </p>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.75rem', borderRadius: '50%' }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <div style={{ opacity: 0.8, fontSize: '0.875rem' }}>Emergency Line</div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>1-800-MEDICARE</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.75rem', borderRadius: '50%' }}>
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <div style={{ opacity: 0.8, fontSize: '0.875rem' }}>Working Hours</div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>24/7 Open</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ background: 'white', padding: '2.5rem', borderRadius: '1rem', color: '#0f172a' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Book Online</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input type="text" placeholder="Full Name" style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                            <input type="email" placeholder="Email Address" style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                            <select style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none', background: 'white', color: '#444' }}>
                                <option>General Checkup</option>
                                <option>Cardiology</option>
                                <option>Pediatrics</option>
                            </select>
                            <button style={{ background: '#0f172a', color: 'white', padding: '1rem', borderRadius: '0.5rem', border: 'none', fontWeight: 700, cursor: 'pointer', marginTop: '0.5rem' }}>Confirm Booking</button>
                        </div>
                    </div>
                </div>
            </section>

            <DemoFooter name="MediCare Plus" color={color} />
        </div>
    );
};

export default ClinicDemo;
