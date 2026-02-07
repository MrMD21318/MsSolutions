import React from 'react';
import { Calendar, Clock, User, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const RestaurantReservation: React.FC = () => {
    const color = "#d97706";

    return (
        <div style={{
            minHeight: '80vh',
            background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=80') center/cover`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem 1rem',
            fontFamily: '"Cairo", sans-serif',
            direction: 'rtl'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="container"
                style={{ maxWidth: '600px', background: 'white', padding: '3rem', borderRadius: '4px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}
            >
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#451a03', marginBottom: '0.5rem' }}>احجز طاولتك</h1>
                    <p style={{ color: '#78350f' }}>لحجز مكانك لتجربة طعام لا تُنسى.</p>
                </div>

                <form style={{ display: 'grid', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#451a03' }}>التاريخ</label>
                            <div style={{ position: 'relative' }}>
                                <Calendar size={18} style={{ position: 'absolute', top: '12px', right: '12px', color: color }} />
                                <input type="date" style={{ width: '100%', padding: '0.75rem 2.5rem 0.75rem 0.75rem', border: '1px solid #d6d3d1', borderRadius: '4px', textAlign: 'right' }} />
                            </div>
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#451a03' }}>الوقت</label>
                            <div style={{ position: 'relative' }}>
                                <Clock size={18} style={{ position: 'absolute', top: '12px', right: '12px', color: color }} />
                                <select style={{ width: '100%', padding: '0.75rem 2.5rem 0.75rem 0.75rem', border: '1px solid #d6d3d1', borderRadius: '4px', background: 'white', textAlign: 'right' }}>
                                    <option>١٨:٠٠</option>
                                    <option>١٩:٠٠</option>
                                    <option>٢٠:٠٠</option>
                                    <option>٢١:٠٠</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#451a03' }}>عدد الضيوف</label>
                        <div style={{ position: 'relative' }}>
                            <User size={18} style={{ position: 'absolute', top: '12px', right: '12px', color: color }} />
                            <select style={{ width: '100%', padding: '0.75rem 2.5rem 0.75rem 0.75rem', border: '1px solid #d6d3d1', borderRadius: '4px', background: 'white', textAlign: 'right' }}>
                                <option>ضيفان</option>
                                <option>٣ ضيوف</option>
                                <option>٤ ضيوف</option>
                                <option>٥+ ضيوف</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#451a03' }}>طلبات خاصة</label>
                        <div style={{ position: 'relative' }}>
                            <MessageSquare size={18} style={{ position: 'absolute', top: '12px', right: '12px', color: color }} />
                            <textarea rows={3} style={{ width: '100%', padding: '0.75rem 2.5rem 0.75rem 0.75rem', border: '1px solid #d6d3d1', borderRadius: '4px', resize: 'vertical', textAlign: 'right' }} placeholder="حساسية طعام، تفضيلات جلوس..."></textarea>
                        </div>
                    </div>

                    <button type="button" style={{ background: color, color: 'white', padding: '1rem', fontSize: '1.25rem', border: 'none', cursor: 'pointer', fontFamily: '"Cairo", sans-serif', marginTop: '1rem', fontWeight: 700 }}>
                        تأكيد الحجز
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default RestaurantReservation;
