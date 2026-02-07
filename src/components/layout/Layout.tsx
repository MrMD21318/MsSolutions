import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { i18n } = useTranslation();

    useEffect(() => {
        const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.dir = dir;
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            {/* 3D Background Scene */}
            {/* <Scene3D /> */}

            {/* Main content with top padding to account for fixed navbar */}
            <div style={{ position: 'relative', zIndex: 10, width: '100%' }}>
                <Navbar />
                <main style={{ flex: 1, paddingTop: '80px' }}>
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};


export default Layout;
