import React from 'react';
import { BookOpen, GraduationCap, Users, Award, Globe, Library, Calendar } from 'lucide-react';
import DemoNavbar from '../../../components/demos/DemoNavbar';
import DemoFooter from '../../../components/demos/DemoFooter';
import { motion } from 'framer-motion';

const UniversityDemo: React.FC = () => {
    const color = "#7c3aed"; // Violet-600

    return (
        <div style={{ fontFamily: '"Georgia", serif', background: '#fdf4ff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <DemoNavbar
                name="EduTech Univ"
                links={["Academics", "Admissions", "Campus", "Research"]}
                color={color}
                logoIcon={<GraduationCap size={32} />}
            />

            {/* Adminssion Banner */}
            <div style={{ background: color, color: 'white', textAlign: 'center', padding: '0.5rem', fontSize: '0.9rem' }}>
                Fall 2026 Applications are now open! <a href="#" style={{ color: 'white', fontWeight: 'bold' }}>Apply Now</a>
            </div>

            {/* Hero */}
            <header style={{
                position: 'relative',
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                background: `linear-gradient(rgba(124, 58, 237, 0.8), rgba(88, 28, 135, 0.8)), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80') center/cover fixed`
            }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.3)', padding: '0.5rem 1.5rem', borderRadius: '50px', marginBottom: '2rem', background: 'rgba(0,0,0,0.2)' }}>
                            <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Shaping the Future</span>
                        </div>
                        <h1 style={{ fontSize: '5rem', fontWeight: 700, margin: '0 0 2rem', lineHeight: 1.1 }}>Knowledge for<br />a Better World</h1>
                        <p style={{ fontSize: '1.5rem', maxWidth: '700px', margin: '0 auto 3rem', opacity: 0.9 }}>
                            Join a diverse community of innovators and leaders.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                            <button style={{ background: 'white', color: color, padding: '1rem 3rem', fontSize: '1.125rem', border: 'none', fontWeight: 700, borderRadius: '4px', cursor: 'pointer' }}>
                                Explore Programs
                            </button>
                            <button style={{ background: 'transparent', color: 'white', padding: '1rem 3rem', fontSize: '1.125rem', border: '2px solid white', fontWeight: 700, borderRadius: '4px', cursor: 'pointer' }}>
                                Virtual Tour
                            </button>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Stats Bar */}
            <div style={{ background: 'white', padding: '3rem 0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', position: 'relative', zIndex: 10, marginTop: '-3rem', width: '90%', margin: '-3rem auto 0', borderRadius: '8px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
                    {[
                        { num: "50+", label: "Academic Programs", icon: <BookOpen size={24} /> },
                        { num: "#1", label: "Innovation Ranking", icon: <Award size={24} /> },
                        { num: "20k", label: "Students", icon: <Users size={24} /> },
                        { num: "95%", label: "Employment Rate", icon: <Globe size={24} /> }
                    ].map((stat, i) => (
                        <div key={i} style={{ borderRight: i !== 3 ? '1px solid #e5e7eb' : 'none' }}>
                            <div style={{ color: color, marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1f2937' }}>{stat.num}</div>
                            <div style={{ color: '#6b7280', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Faculties */}
            <section style={{ padding: '8rem 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem', color: '#1f2937' }}>Academic Faculties</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Arts & Humanities", icon: <Library size={40} />, img: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=800&q=80" },
                            { title: "Science & Technology", icon: <Globe size={40} />, img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80" },
                            { title: "Business & Law", icon: <Users size={40} />, img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" }
                        ].map((faculty, i) => (
                            <div key={i} style={{ group: 'card', cursor: 'pointer' }}>
                                <div style={{ height: '240px', overflow: 'hidden', borderRadius: '8px', marginBottom: '1.5rem', position: 'relative' }}>
                                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', transition: 'background 0.3s' }}></div>
                                    <img src={faculty.img} alt={faculty.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                                    <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', color: 'white' }}>
                                        <div style={{ background: color, padding: '0.5rem', borderRadius: '4px', display: 'inline-block', marginBottom: '0.5rem' }}>
                                            {faculty.icon}
                                        </div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{faculty.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Events/News */}
            <section style={{ padding: '6rem 0', background: 'white' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1f2937' }}>Upcoming Events</h2>
                        <a href="#" style={{ color: color, fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>View Calendar <ArrowRight size={16} /></a>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        {[
                            { date: "Oct 15", title: "Global Innovation Summit", loc: "Main Auditorium" },
                            { date: "Oct 22", title: "Alumni Homecoming", loc: "Campus Green" },
                            { date: "Nov 05", title: "Research Symposium", loc: "Science Hall" }
                        ].map((event, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '2rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                                <div style={{ textAlign: 'center', paddingRight: '1.5rem', borderRight: '1px solid #e5e7eb' }}>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: color, textTransform: 'uppercase' }}>{event.date.split(' ')[0]}</div>
                                    <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1f2937' }}>{event.date.split(' ')[1]}</div>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1f2937' }}>{event.title}</h4>
                                    <div style={{ color: '#6b7280', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Globe size={14} /> {event.loc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <DemoFooter name="EduTech Univ" color={color} />
        </div>
    );
};

export default UniversityDemo;
