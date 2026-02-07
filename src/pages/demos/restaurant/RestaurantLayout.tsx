import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DemoNavbar from '../../../components/demos/DemoNavbar';
import DemoFooter from '../../../components/demos/DemoFooter';
import { Utensils } from 'lucide-react';

const RestaurantLayout: React.FC = () => {
    const color = "#d97706"; // Amber-600

    const location = useLocation();
    const isDarkPage = location.pathname === '/demo/restaurant' || location.pathname === '/demo/restaurant/reservation';

    return (
        <div style={{ fontFamily: '"Cairo", system-ui, sans-serif', background: '#fffbeb', minHeight: '100vh', display: 'flex', flexDirection: 'column', direction: 'rtl' }}>
            <DemoNavbar
                name="لو جورميه"
                links={[
                    { name: "الرئيسية", path: "/demo/restaurant" },
                    { name: "القائمة", path: "/demo/restaurant/menu" },
                    { name: "حجز", path: "/demo/restaurant/reservation" },
                    { name: "فعاليات", path: "/demo/restaurant/events" }
                ]}
                color={color}
                logoIcon={<Utensils size={32} />}
                actionBtn={{ text: "احجز طاولتك", path: "/demo/restaurant/reservation" }}
                isDarkHero={isDarkPage}
            />
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
            <DemoFooter name="لو جورميه" color={color} />
        </div>
    );
};

export default RestaurantLayout;
