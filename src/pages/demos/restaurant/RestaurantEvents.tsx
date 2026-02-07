import React from 'react';
import { motion } from 'framer-motion';

const RestaurantEvents: React.FC = () => {
    const color = "#d97706";

    return (
        <div className="container" style={{ padding: '120px 1rem 6rem', fontFamily: '"Cairo", sans-serif', direction: 'rtl' }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#451a03' }}>المناسبات الخاصة</h1>
                    <div style={{ width: '80px', height: '4px', background: color, margin: '1rem auto' }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '8rem' }}>
                    <img src="https://images.unsplash.com/photo-1519671482538-580b5ca08b68?w=800&q=80" alt="Wedding" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                    <div>
                        <h2 style={{ fontSize: '2.5rem', color: '#451a03', marginBottom: '1.5rem', fontWeight: 700 }}>حفلات الزفاف والاحتفالات</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#78350f', marginBottom: '2rem' }}>
                            احتفل بيومك المميز في قاعتنا الخاصة والحصرية. نقدم قوائم طعام مخصصة، وتنسيق زهور، وخدمة مكرسة لضمان أن يكون حدثك مثالياً.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: '#451a03' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}><span style={{ color, fontWeight: 'bold' }}>✔</span> سعة تصل إلى ١٠٠ ضيف</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}><span style={{ color, fontWeight: 'bold' }}>✔</span> تنسيق زهور مخصص حسب الطلب</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}><span style={{ color, fontWeight: 'bold' }}>✔</span> توفر الموسيقى الحية</li>
                        </ul>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', color: '#451a03', marginBottom: '1.5rem', fontWeight: 700 }}>عشاء الشركات ورجال الأعمال</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#78350f', marginBottom: '2rem' }}>
                            أبهر عملاءك أو كافئ فريقك. توفر غرفة الطعام الخاصة لدينا الخصوصية والرفاهية لجميع احتياجات عملك.
                        </p>
                        <button style={{ background: color, color: 'white', padding: '1rem 3rem', border: 'none', cursor: 'pointer', fontFamily: '"Cairo", sans-serif', fontSize: '1.125rem', fontWeight: 700, borderRadius: '4px' }}>
                            اطلب عرض سعر
                        </button>
                    </div>
                    <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80" alt="Corporate" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                </div>
            </motion.div>
        </div>
    );
};

export default RestaurantEvents;
