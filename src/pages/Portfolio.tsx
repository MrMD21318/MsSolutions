import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
    const { t } = useTranslation();

    const projects = [
        {
            id: 1,
            title: t('portfolio.projects.restaurant.title'),
            category: t('portfolio.projects.restaurant.category'),
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
            tags: t('portfolio.projects.restaurant.tags').split(', '),
            path: "/demo/restaurant"
        },
        {
            id: 2,
            title: t('portfolio.projects.clinic.title'),
            category: t('portfolio.projects.clinic.category'),
            image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
            tags: t('portfolio.projects.clinic.tags').split(', '),
            path: "/demo/clinic"
        },
        {
            id: 3,
            title: t('portfolio.projects.university.title'),
            category: t('portfolio.projects.university.category'),
            image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
            tags: t('portfolio.projects.university.tags').split(', '),
            path: "/demo/university"
        },
        {
            id: 4,
            title: t('portfolio.projects.supermarket.title'),
            category: t('portfolio.projects.supermarket.category'),
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
            tags: t('portfolio.projects.supermarket.tags').split(', '),
            path: "/demo/supermarket"
        },
        {
            id: 5,
            title: t('portfolio.projects.company.title'),
            category: t('portfolio.projects.company.category'),
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
            tags: t('portfolio.projects.company.tags').split(', '),
            path: "/demo/company"
        },
        {
            id: 6,
            title: t('portfolio.projects.agency.title'),
            category: t('portfolio.projects.agency.category'),
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
            tags: t('portfolio.projects.agency.tags').split(', '),
            path: "/demo/agency"
        }
    ];

    return (
        <section style={{ minHeight: '100vh', padding: '2rem 1rem' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
                        {t('portfolio.title')}
                    </h2>
                    <p style={{ color: '#9ca3af', fontSize: '1.125rem' }}>
                        {t('portfolio.subtitle')}
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gap: '1.5rem' }} className="md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <Link
                            to={project.path}
                            key={project.id}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                style={{
                                    position: 'relative',
                                    borderRadius: '1rem',
                                    overflow: 'hidden',
                                    aspectRatio: '16/10',
                                    cursor: 'pointer',
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    padding: '1.5rem',
                                }}>
                                    <span style={{ color: '#06b6d4', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                                        {project.category}
                                    </span>
                                    <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                                        {project.title}
                                    </h3>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {project.tags.map(tag => (
                                            <span key={tag} style={{
                                                fontSize: '0.7rem',
                                                background: 'rgba(255,255,255,0.1)',
                                                padding: '0.25rem 0.5rem',
                                                borderRadius: '4px',
                                                color: '#d1d5db'
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
