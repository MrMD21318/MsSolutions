import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, ChefHat, Coffee, MapPin, Clock, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const RestaurantHome: React.FC = () => {
    const color = "#d97706"; // Amber-600

    return (
        <div style={{ fontFamily: '"Cairo", sans-serif' }}>
            {/* Hero Section */}
            <header style={{
                position: 'relative',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                overflow: 'hidden'
            }}>
                {/* Background Image */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))', zIndex: 1 }}></div>
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                        src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?w=1600&q=80"
                        alt="Restaurant Background"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ zIndex: 10, maxWidth: '800px', padding: '0 2rem' }}
                >
                    <div style={{
                        display: 'inline-block',
                        border: '1px solid rgba(255,255,255,0.4)',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '0',
                        marginBottom: '2rem',
                        background: 'rgba(0,0,0,0.2)',
                        backdropFilter: 'blur(4px)'
                    }}>
                        <span style={{ fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600 }}>تجربة التذوق الفاخرة</span>
                    </div>
                    <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', marginBottom: '1.5rem', fontWeight: 900, lineHeight: 1.1 }}>
                        لو جورميه
                    </h1>
                    <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', maxWidth: '600px', margin: '0 auto 3rem', color: '#e5e7eb', lineHeight: 1.8 }}>
                        حيث يلتقي الشغف بالإتقان. استمتع بأرقى الأطباق العالمية في قلب المدينة.
                    </p>
                    <Link to="/demo/restaurant/reservation">
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: '#fff', color: color }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: color, color: 'white', padding: '1.25rem 3.5rem', fontSize: '1.125rem', border: `2px solid ${color}`,
                                cursor: 'pointer', fontFamily: '"Cairo", sans-serif', borderRadius: '0', fontWeight: 700, transition: 'all 0.3s'
                            }}
                        >
                            احجز طاولتك
                        </motion.button>
                    </Link>
                </motion.div>
            </header>

            {/* Features (Intro Grid) */}
            <section style={{ padding: '8rem 0', background: '#fffbeb' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#451a03', marginBottom: '1rem' }}>تميز في كل التفاصيل</h2>
                        <div style={{ width: '60px', height: '4px', background: color, margin: '0 auto' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', textAlign: 'center' }}>
                        {[
                            { icon: <ChefHat size={40} />, title: "أمهر الطهاة", desc: "فريق طهي عالمي بقيادة الشيف أنطوان، يقدم لكم إبداعات لا تُنسى." },
                            { icon: <Coffee size={40} />, title: "قهوة مختصة", desc: "حبوب قهوة مختارة بعناية ومحمصة محلياً لمذاق غني وأصيل." },
                            { icon: <Star size={40} />, title: "أجواء ساحرة", desc: "تصميم داخلي مستوحى من العصر الفيكتوري يضمن لكم الراحة والخصوصية." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                style={{ background: 'white', padding: '3rem 2rem', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)', borderRadius: '8px' }}
                            >
                                <div style={{ color: color, marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#451a03', fontWeight: 700 }}>{item.title}</h3>
                                <p style={{ color: '#78350f', lineHeight: 1.8 }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Dish Section (Parallax-like) */}
            <section style={{ padding: '8rem 0', background: 'white', overflow: 'hidden' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100%', height: '100%', border: `2px solid ${color}`, zIndex: 0 }}></div>
                        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80" alt="Signature" style={{ width: '100%', borderRadius: '0', position: 'relative', zIndex: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{ color: color, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>طبقنا المميز</span>
                        <h2 style={{ fontSize: '3.5rem', margin: '0 0 2rem', color: '#451a03', fontWeight: 800, lineHeight: 1.1 }}>ستيك ترافل فيليه</h2>
                        <p style={{ fontSize: '1.25rem', color: '#78350f', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                            قطعة فاخرة (250 غرام) من اللحم البقري الصافي، تُشوى ببطء لتصل إلى درجة الكمال، تُقدم مع صلصة الترافل الأسود وهريس البطاطس الكريمي.
                        </p>
                        <Link to="/demo/restaurant/menu" style={{ color: color, textDecoration: 'none', fontSize: '1.125rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, borderBottom: `2px solid ${color}`, paddingBottom: '0.25rem' }}>
                            اكتشف القائمة الكاملة <ArrowLeft size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Chef Highlight */}
            <section style={{ padding: '8rem 0', background: '#1c1917', color: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <img src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&q=80" alt="Chef" style={{ width: '100%', filter: 'grayscale(100%)', borderRadius: '4px' }} />
                            <div style={{ position: 'absolute', bottom: '-2rem', left: '-2rem', background: color, padding: '2rem', textAlign: 'center' }}>
                                <p style={{ fontSize: '3rem', fontWeight: 800, margin: 0, lineHeight: 1 }}>25+</p>
                                <span style={{ fontSize: '0.9rem', textTransform: 'uppercase' }}>عاماً من الخبرة</span>
                            </div>
                        </div>
                        <div>
                            <Quote size={60} color={color} style={{ opacity: 0.5, marginBottom: '2rem' }} />
                            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem' }}>الشيف أنطوان خوري</h2>
                            <p style={{ fontSize: '1.5rem', lineHeight: 1.6, color: '#d6d3d1', marginBottom: '3rem', fontStyle: 'italic' }}>
                                "الطهي ليس مجرد تحضير طعام، بل هو فن سرد القصص من خلال النكهات. كل طبق أقدمه يحكي حكاية من التراث بلمسة عصرية."
                            </p>
                            <div style={{ display: 'flex', gap: '4rem' }}>
                                <div>
                                    <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 700, color: color }}>باريس</span>
                                    <span style={{ color: '#a8a29e' }}>تدريب عالي</span>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 700, color: color }}>دبي</span>
                                    <span style={{ color: '#a8a29e' }}>رئيس طهاة</span>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 700, color: color }}>بيروت</span>
                                    <span style={{ color: '#a8a29e' }}>الأصل</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reservation Callout */}
            <section style={{ padding: '6rem 0', backgroundImage: 'url(https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1600&q=80)', backgroundSize: 'cover', backgroundAttachment: 'fixed', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'white', marginBottom: '2rem' }}>جاهز لتجربة لا تُنسى؟</h2>
                    <p style={{ fontSize: '1.5rem', color: '#e5e7eb', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
                        الأماكن محدودة. ننصح بالحجز المسبق لضمان أفضل طاولة لكم ولعائلتكم.
                    </p>
                    <Link to="/demo/restaurant/reservation">
                        <button style={{
                            background: color, color: 'white', padding: '1.25rem 4rem', fontSize: '1.25rem', border: 'none',
                            cursor: 'pointer', fontFamily: '"Cairo", sans-serif', borderRadius: '0', fontWeight: 700
                        }}>
                            احجز الآن
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default RestaurantHome;
