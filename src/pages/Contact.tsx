import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all fields");
            return;
        }

        try {
            const res = await fetch('http://localhost:3001/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                alert("Message sent successfully!");
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Server error. Please try again later.");
        }
    };

    return (
        <section style={{ minHeight: '100vh', padding: '2rem 1rem' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
                        {t('contact.title')}
                    </h2>
                    <p style={{ color: '#9ca3af', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
                        {t('contact.subtitle')}
                    </p>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }} className="lg:flex-row">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}
                    >
                        <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ padding: '0.75rem', background: 'rgba(6, 182, 212, 0.2)', borderRadius: '0.5rem' }}>
                                <Mail size={20} style={{ color: '#06b6d4' }} />
                            </div>
                            <div>
                                <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '0.25rem' }}>{t('contact.email')}</h4>
                                <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>info@msforsolutions.com</p>
                            </div>
                        </div>



                        <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
                            <div style={{ padding: '0.75rem', background: 'rgba(34, 197, 94, 0.2)', borderRadius: '0.5rem' }}>
                                <MessageCircle size={20} style={{ color: '#22c55e' }} />
                            </div>
                            <div>
                                <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '0.25rem' }}>WhatsApp</h4>
                                <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>{t('contact.whatsapp')}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ flex: 1.5 }}
                    >
                        <form onSubmit={handleSubmit} className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
                            <div style={{ display: 'grid', gap: '1rem', marginBottom: '1rem' }} className="md:grid-cols-2">
                                <div>
                                    <label style={{ display: 'block', color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 600 }}>{t('contact.name')}</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: '0.875rem 1rem',
                                            background: 'rgba(0,0,0,0.3)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '0.75rem',
                                            color: 'white',
                                            fontSize: '1rem',
                                        }}
                                        placeholder={t('contact.placeholders.name')}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 600 }}>{t('contact.email')}</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: '0.875rem 1rem',
                                            background: 'rgba(0,0,0,0.3)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '0.75rem',
                                            color: 'white',
                                            fontSize: '1rem',
                                        }}
                                        placeholder={t('contact.placeholders.email')}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 600 }}>{t('contact.message')}</label>
                                <textarea
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '0.875rem 1rem',
                                        background: 'rgba(0,0,0,0.3)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '0.75rem',
                                        color: 'white',
                                        fontSize: '1rem',
                                        resize: 'none',
                                    }}
                                    placeholder={t('contact.placeholders.message')}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                                    border: 'none',
                                    borderRadius: '0.75rem',
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                }}
                            >
                                {t('contact.send')}
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
