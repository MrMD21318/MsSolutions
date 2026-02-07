import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DemoNavbar from '../../../components/demos/DemoNavbar';
import DemoFooter from '../../../components/demos/DemoFooter';
import { GraduationCap } from 'lucide-react';

const UniversityLayout: React.FC = () => {
    const color = "#7c3aed"; // Violet-600
    const location = useLocation();

    const isDarkPage = location.pathname === '/demo/university';

    return (
        <div style={{ fontFamily: '"Cairo", system-ui, sans-serif', background: '#fdf4ff', minHeight: '100vh', display: 'flex', flexDirection: 'column', direction: 'rtl' }}>
            <DemoNavbar
                name="جامعة النجاح"
                links={[
                    { name: "الرئيسية", path: "/demo/university" },
                    { name: "الكليات", path: "/demo/university/faculties" },
                    { name: "القبول", path: "/demo/university/admissions" },
                    { name: "الحياة الجامعية", path: "/demo/university/campus" }
                ]}
                color={color}
                logoIcon={<GraduationCap size={32} />}
                actionBtn={{ text: "سجل الآن", path: "/demo/university/admissions" }}
                isDarkHero={isDarkPage}
            />
            {/* Adminssion Banner */}
            <div style={{ background: color, color: 'white', textAlign: 'center', padding: '0.5rem', fontSize: '0.9rem', fontFamily: '"Cairo", sans-serif' }}>
                باب القبول لفصل خريف 2026 مفتوح الآن! <span style={{ fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>سجل الآن</span>
            </div>
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
            <DemoFooter name="جامعة النجاح" color={color} />
        </div>
    );
};

export default UniversityLayout;
