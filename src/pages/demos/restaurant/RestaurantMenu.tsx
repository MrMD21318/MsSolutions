import React from 'react';
import { motion } from 'framer-motion';

const RestaurantMenu: React.FC = () => {
    const color = "#d97706";

    const menuCategories = [
        {
            title: "المقبلات",
            items: [
                { name: "شوربة البصل الفرنسية", price: "٤٥ ر.س", desc: "بصل مكرمل، مرق لحم بقري غني، وجبنة غرويير ذائبة." },
                { name: "كارباتشيو لحم البقر", price: "٦٥ ر.س", desc: "شرائح رقيقة من اللحم الني، جبن بارميزان، نبات الكبر، وزيت الكمأة." },
                { name: "إسكارجو بورغوني", price: "٥٥ ر.س", desc: "حلزون مخبوز في زبدة الثوم والأعشاب الفرنسية." }
            ]
        },
        {
            title: "الأطباق الرئيسية",
            items: [
                { name: "كونفيه البط", price: "١٢٠ ر.س", desc: "فخذ بط مطهو ببطء، بطاطس محمصة، وسبانخ بالثوم." },
                { name: "فيليه مينيون", price: "١٦٠ ر.س", desc: "تندرلوين (٨ أونصة)، صلصة النبيذ الأحمر، وهريس البطاطس." },
                { name: "محار مشوي", price: "١٣٠ ر.س", desc: "هريس القرنبيط، بانشيتا مقرمشة، وزبدة الليمون." }
            ]
        },
        {
            title: "الحلويات",
            items: [
                { name: "كريم بروليه", price: "٤٠ ر.س", desc: "قاعدة كاسترد غنية تعلوها طبقة من السكر المكرمل المقرمش." },
                { name: "سوفليه الشوكولاتة", price: "٥٠ ر.س", desc: "متعة الشوكولاتة الدافئة مع آيس كريم الفانيليا." }
            ]
        }
    ];

    return (
        <div className="container" style={{ padding: '120px 1rem 6rem', fontFamily: '"Cairo", sans-serif', direction: 'rtl' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{ color: color, fontSize: '1.2rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>تذوق الفخامة</span>
                    <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#451a03', marginTop: '0.5rem' }}>قائمة الطعام</h1>
                    <div style={{ width: '80px', height: '4px', background: color, margin: '1.5rem auto 0' }}></div>
                </div>

                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    {menuCategories.map((cat, i) => (
                        <div key={i} style={{ marginBottom: '5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                                <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#451a03', margin: 0 }}>{cat.title}</h2>
                                <div style={{ flex: 1, height: '1px', background: '#e5e7eb' }}></div>
                            </div>

                            <div style={{ display: 'grid', gap: '2rem' }}>
                                {cat.items.map((item, j) => (
                                    <motion.div
                                        key={j}
                                        whileHover={{ x: -10 }}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                            background: 'white',
                                            padding: '1.5rem',
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                                            borderRight: `4px solid ${color}`
                                        }}
                                    >
                                        <div style={{ flex: 1, paddingLeft: '2rem' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#451a03', margin: 0 }}>{item.name}</h3>
                                                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: color }}>{item.price}</div>
                                            </div>
                                            <p style={{ color: '#78350f', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default RestaurantMenu;
