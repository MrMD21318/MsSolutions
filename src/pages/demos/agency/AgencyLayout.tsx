import React from 'react';
import { Outlet } from 'react-router-dom';
import DemoNavbar from '../../../components/demos/DemoNavbar';
import DemoFooter from '../../../components/demos/DemoFooter';
import { Camera } from 'lucide-react';

const AgencyLayout: React.FC = () => {
    const color = "#9333ea"; // Purple-600

    return (
        <div style={{ fontFamily: '"Cairo", system-ui, sans-serif', background: 'black', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', direction: 'rtl' }}>
            <DemoNavbar
                name="وكالة فايرال"
                links={[
                    { name: "الرئيسية", path: "/demo/agency" },
                    { name: "أعمالنا", path: "/demo/agency/work" },
                    { name: "خدماتنا", path: "/demo/agency/services" },
                    { name: "اتصل بنا", path: "/demo/agency/contact" }
                ]}
                color={color}
                logoIcon={<Camera size={32} />}
                actionBtn={{ text: "ابدأ مشروعًا", path: "/demo/agency/contact" }}
                isDarkHero={true}
            />
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
            <DemoFooter name="وكالة فايرال" color={color} />
        </div>
    );
};

export default AgencyLayout;
