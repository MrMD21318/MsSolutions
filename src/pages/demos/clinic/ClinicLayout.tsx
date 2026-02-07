import React from 'react';
import { Outlet } from 'react-router-dom';
import DemoNavbar from '../../../components/demos/DemoNavbar';
import DemoFooter from '../../../components/demos/DemoFooter';
import { Activity } from 'lucide-react';

const ClinicLayout: React.FC = () => {
    const color = "#0284c7"; // Sky-600

    return (
        <div style={{ fontFamily: '"Cairo", system-ui, sans-serif', background: '#f0f9ff', minHeight: '100vh', display: 'flex', flexDirection: 'column', direction: 'rtl' }}>
            <DemoNavbar
                name="ميدي كير بلس"
                links={[
                    { name: "الرئيسية", path: "/demo/clinic" },
                    { name: "أطباؤنا", path: "/demo/clinic/doctors" },
                    { name: "خدماتنا", path: "/demo/clinic/services" },
                    { name: "موعد", path: "/demo/clinic/appointment" }
                ]}
                color={color}
                logoIcon={<Activity size={32} />}
                actionBtn={{ text: "احجز الآن", path: "/demo/clinic/appointment" }}
            />
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
            <DemoFooter name="ميدي كير بلس" color={color} />
        </div>
    );
};

export default ClinicLayout;
