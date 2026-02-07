import React from 'react';
import { Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ClinicAppointment: React.FC = () => {
    const color = "#0284c7";

    return (
        <section style={{ padding: '120px 0 6rem', background: 'white', fontFamily: '"Cairo", sans-serif', direction: 'rtl' }}>
            <div className="container">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                    <div>
                        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>حجز موعد جديد</h1>
                        <p style={{ color: '#64748b', fontSize: '1.25rem', marginBottom: '2rem', lineHeight: 1.8 }}>
                            املأ النموذج أدناه لتحديد موعد استشارة مع أحد المتخصصين لدينا. للحالات الطارئة، يرجى الاتصال بنا على الفور.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '3rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#f0f9ff', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #e0f2fe' }}>
                                <div style={{ background: 'white', padding: '1rem', borderRadius: '50%', color: color, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <div style={{ opacity: 0.8, fontSize: '1rem', color: '#64748b' }}>خط الطوارئ (٢٤/٧)</div>
                                    <div style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', direction: 'ltr' }}>1-800-MEDICARE</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: '#f8fafc', padding: '3rem', borderRadius: '1.5rem', border: '1px solid #e2e8f0', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)' }}>
                        <form style={{ display: 'grid', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#334155' }}>الاسم الأول</label>
                                    <input type="text" style={{ width: '100%', padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#334155' }}>اسم العائلة</label>
                                    <input type="text" style={{ width: '100%', padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#334155' }}>البريد الإلكتروني</label>
                                <input type="email" style={{ width: '100%', padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#334155' }}>رقم الهاتف</label>
                                <input type="tel" style={{ width: '100%', padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none', direction: 'ltr', textAlign: 'right' }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#334155' }}>القسم المطلوب</label>
                                <select style={{ width: '100%', padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none', background: 'white' }}>
                                    <option value="">اختر القسم</option>
                                    <option>الطب العام</option>
                                    <option>أمراض القلب</option>
                                    <option>طب الأطفال</option>
                                    <option>طب الأعصاب</option>
                                    <option>العظام والمفاصل</option>
                                </select>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#334155' }}>التاريخ المفضل</label>
                                <input type="date" style={{ width: '100%', padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#334155' }}>سبب الزيارة / الأعراض</label>
                                <textarea rows={4} style={{ width: '100%', padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none', resize: 'vertical' }}></textarea>
                            </div>

                            <button type="button" style={{
                                background: color, color: 'white', padding: '1rem', borderRadius: '0.5rem', border: 'none',
                                fontWeight: 700, cursor: 'pointer', fontSize: '1.25rem', marginTop: '1rem',
                                transition: 'background 0.3s'
                            }}>
                                تأكيد الموعد
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ClinicAppointment;
