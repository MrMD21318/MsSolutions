import React from 'react';
import { Utensils, Star, Clock, ChefHat, Calendar, Users, ArrowRight } from 'lucide-react';
import DemoNavbar from '../../../components/demos/DemoNavbar';
import DemoFooter from '../../../components/demos/DemoFooter';
import { motion } from 'framer-motion';

const RestaurantDemo: React.FC = () => {
    const color = "#d97706"; // Amber-600

    return (
        <div style={{ fontFamily: '"Playfair Display", serif', background: '#fffbeb', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <DemoNavbar
                name="Le Gourmet"
                links={[{ name: "Menu", path: "#menu" }, { name: "Reservations", path: "#reservations" }, { name: "Events", path: "#events" }, { name: "Contact", path: "#contact" }]}
                color={color}
                logoIcon={<ChefHat size={32} />}
            />

            {/* Hero */}
            <header style={{
                position: 'relative',
                height: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=80') center/cover fixed`
            }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span style={{ fontSize: '1.25rem', letterSpacing: '0.3em', textTransform: 'uppercase', display: 'block', marginBottom: '1.5rem', color: '#fbbf24' }}>Exquisite Fine Dining</span>
                        <h1 style={{ fontSize: '5.5rem', fontWeight: 700, margin: '0 0 2rem', lineHeight: 1.1, fontFamily: '"Great Vibes", cursive' }}>Taste the Extraordinary</h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 3rem', fontStyle: 'italic', opacity: 0.9 }}>
                            Experience a culinary journey where tradition meets innovation in the heart of the city.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                            <button style={{
                                background: color,
                                color: 'white',
                                padding: '1rem 3rem',
                                fontSize: '1.125rem',
                                border: 'none',
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                transition: 'transform 0.2s',
                            }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                Book a Table
                            </button>
                            <button style={{
                                background: 'transparent',
                                color: 'white',
                                padding: '1rem 3rem',
                                fontSize: '1.125rem',
                                border: '1px solid white',
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                transition: 'background 0.2s',
                            }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                                View Menu
                            </button>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Features */}
            <section style={{ padding: '6rem 0', background: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', textAlign: 'center' }}>
                        {[
                            { icon: <Clock size={40} />, title: "Open Daily", text: "11:00 AM - 11:00 PM" },
                            { icon: <Utensils size={40} />, title: "Fresh Ingredients", text: "Farm to table sourcing" },
                            { icon: <Star size={40} />, title: "Michelin Star", text: "Awarded 2024 & 2025" }
                        ].map((item, i) => (
                            <div key={i} style={{ padding: '3rem 2rem', border: '1px solid #f5f5f4', background: '#fafaf9', transition: 'transform 0.3s' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div style={{ color: color, marginBottom: '1.5rem' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#44403c', fontFamily: 'serif' }}>{item.title}</h3>
                                <p style={{ color: '#78716c', fontSize: '1.1rem' }}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Preview */}
            <section style={{ padding: '8rem 0', background: '#fffbeb' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span style={{ color: color, textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>Discover</span>
                        <h2 style={{ fontSize: '3.5rem', marginTop: '0.5rem', color: '#292524', fontFamily: 'serif' }}>Signature Dishes</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '5rem', alignItems: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100%', height: '100%', border: `2px solid ${color}`, zIndex: 0 }}></div>
                            <img
                                src="https://images.unsplash.com/photo-1544025162-d76690b6d01e?w=800&q=80"
                                alt="Dish"
                                style={{ width: '100%', position: 'relative', zIndex: 1, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
                            />
                        </div>

                        <div>
                            {[
                                { name: "Truffle Risotto", price: "$35", desc: "Arborio rice, black truffle, parmesan crisp" },
                                { name: "Pan Seared Scallops", price: "$42", desc: "Cauliflower puree, lemon butter sauce, microgreens" },
                                { name: "Wagyu Beef Steak", price: "$85", desc: "Grade A5, roasted root vegetables, red wine reduction" },
                                { name: "Lobster Thermidor", price: "$68", desc: "Cognac cream sauce, gruyère crust, asparagus" },
                                { name: "Chocolate Soufflé", price: "$18", desc: "Dark chocolate (70%), vanilla bean ice cream" }
                            ].map((dish, i) => (
                                <div key={i} style={{ marginBottom: '2.5rem', borderBottom: '1px dashed #d6d3d1', paddingBottom: '1.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.4rem', fontWeight: 600, marginBottom: '0.5rem', color: '#292524', fontFamily: 'serif' }}>
                                        <span>{dish.name}</span>
                                        <span style={{ color: color }}>{dish.price}</span>
                                    </div>
                                    <p style={{ color: '#78716c', margin: 0, fontStyle: 'italic', fontSize: '1.05rem' }}>{dish.desc}</p>
                                </div>
                            ))}
                            <button style={{ marginTop: '1rem', background: 'transparent', border: 'none', borderBottom: `2px solid ${color}`, paddingBottom: '0.25rem', fontSize: '1.1rem', color: '#292524', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                View Full Menu <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reservation Parallax */}
            <section style={{
                padding: '8rem 0',
                backgroundImage: 'url("https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1600&q=80")',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
            }}>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3.5rem', color: 'white', marginBottom: '1.5rem', fontFamily: 'serif' }}>Make a Reservation</h2>
                    <p style={{ color: '#e5e5e5', fontSize: '1.25rem', marginBottom: '3rem' }}>Book your table for an unforgettable dining experience.</p>

                    <div style={{ background: 'white', padding: '2rem', borderRadius: '4px', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: '200px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #e5e5e5', padding: '0.75rem', borderRadius: '4px' }}>
                                <Calendar size={20} color={color} style={{ marginRight: '0.5rem' }} />
                                <input type="date" style={{ border: 'none', outline: 'none', width: '100%', fontFamily: 'inherit' }} />
                            </div>
                        </div>
                        <div style={{ flex: 1, minWidth: '200px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #e5e5e5', padding: '0.75rem', borderRadius: '4px' }}>
                                <Clock size={20} color={color} style={{ marginRight: '0.5rem' }} />
                                <select style={{ border: 'none', outline: 'none', width: '100%', fontFamily: 'inherit', background: 'transparent' }}>
                                    <option>18:00</option>
                                    <option>19:00</option>
                                    <option>20:00</option>
                                    <option>21:00</option>
                                </select>
                            </div>
                        </div>
                        <div style={{ flex: 1, minWidth: '200px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #e5e5e5', padding: '0.75rem', borderRadius: '4px' }}>
                                <Users size={20} color={color} style={{ marginRight: '0.5rem' }} />
                                <select style={{ border: 'none', outline: 'none', width: '100%', fontFamily: 'inherit', background: 'transparent' }}>
                                    <option>2 People</option>
                                    <option>3 People</option>
                                    <option>4 People</option>
                                    <option>5+ People</option>
                                </select>
                            </div>
                        </div>
                        <button style={{
                            background: color,
                            color: 'white',
                            border: 'none',
                            padding: '0.75rem 2rem',
                            fontWeight: 600,
                            borderRadius: '4px',
                            cursor: 'pointer',
                            flex: 1,
                            minWidth: '200px'
                        }}>Find Table</button>
                    </div>
                </div>
            </section>

            <DemoFooter name="Le Gourmet" color={color} />
        </div>
    );
};

export default RestaurantDemo;
