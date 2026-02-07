import React from 'react';
import { Outlet } from 'react-router-dom';
import DemoNavbar from '../../../components/demos/DemoNavbar';
import DemoFooter from '../../../components/demos/DemoFooter';
import { Apple, ShoppingCart, Search } from 'lucide-react';

const SupermarketLayout: React.FC = () => {
    const color = "#16a34a"; // Green-600

    return (
        <div style={{ fontFamily: '"Cairo", system-ui, sans-serif', background: '#f9fafb', minHeight: '100vh', display: 'flex', flexDirection: 'column', direction: 'rtl' }}>
            <DemoNavbar
                name="فريش مارت"
                links={[
                    { name: "الرئيسية", path: "/demo/supermarket" },
                    { name: "تسوق", path: "/demo/supermarket/shop" },
                    { name: "عروض", path: "/demo/supermarket/deals" },
                    { name: "وصفات", path: "/demo/supermarket/recipes" }
                ]}
                color={color}
                logoIcon={<Apple size={32} />}
                actionBtn={{ text: "تسوق الآن", path: "/demo/supermarket/shop" }}
            />

            {/* Sticky Search Bar */}
            <div style={{ background: 'white', padding: '1rem 0', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', position: 'sticky', top: '72px', zIndex: 40 }}>
                <div className="container" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <input type="text" placeholder="ابحث عن المنتجات (مثل: أفوكادو عضوي)..." style={{ width: '100%', padding: '0.75rem 3rem 0.75rem 1rem', borderRadius: '4px', border: '1px solid #d1d5db', outline: 'none', fontSize: '1rem', fontFamily: '"Cairo", sans-serif' }} />
                        <Search size={20} color="#9ca3af" style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                    </div>
                    <button style={{ background: color, color: 'white', padding: '0.75rem 1.5rem', borderRadius: '4px', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, cursor: 'pointer', fontFamily: '"Cairo", sans-serif' }}>
                        <ShoppingCart size={20} /> سلة الشراء (0)
                    </button>
                </div>
            </div>

            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
            <DemoFooter name="فريش مارت" color={color} />
        </div>
    );
};

export default SupermarketLayout;
