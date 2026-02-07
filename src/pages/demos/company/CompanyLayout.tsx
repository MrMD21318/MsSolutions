import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DemoNavbar from '../../../components/demos/DemoNavbar';
import DemoFooter from '../../../components/demos/DemoFooter';
import { Building } from 'lucide-react';

const CompanyLayout: React.FC = () => {
    const color = "#1e40af"; // Blue-800
    const location = useLocation();

    const isDarkPage = location.pathname === '/demo/company';

    return (
        <div style={{ fontFamily: '"Cairo", system-ui, sans-serif', background: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', direction: 'rtl' }}>
            <DemoNavbar
                name="مجموعة الاحتراف"
                links={[
                    { name: "الرئيسية", path: "/demo/company" },
                    { name: "خدمات", path: "/demo/company/services" },
                    { name: "عن الشركة", path: "/demo/company/about" },
                    { name: "اتصل بنا", path: "/demo/company/contact" }
                ]}
                color={color}
                logoIcon={<Building size={32} />}
                actionBtn={{ text: "ابدا معنا", path: "/demo/company/contact" }}
                isDarkHero={isDarkPage}
            />
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
            <DemoFooter name="مجموعة الاحتراف" color={color} />
        </div>
    );
};

export default CompanyLayout;
