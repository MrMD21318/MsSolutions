import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import LoadingScreen from './components/common/LoadingScreen';
import { AnimatePresence } from 'framer-motion';

// --- Demo Imports ---

// Restaurant
import RestaurantLayout from './pages/demos/restaurant/RestaurantLayout';
import RestaurantHome from './pages/demos/restaurant/RestaurantHome';
import RestaurantMenu from './pages/demos/restaurant/RestaurantMenu';
import RestaurantReservation from './pages/demos/restaurant/RestaurantReservation';
import RestaurantEvents from './pages/demos/restaurant/RestaurantEvents';

// Clinic
import ClinicLayout from './pages/demos/clinic/ClinicLayout';
import ClinicHome from './pages/demos/clinic/ClinicHome';
import ClinicDoctors from './pages/demos/clinic/ClinicDoctors';
import ClinicAppointment from './pages/demos/clinic/ClinicAppointment';
import ClinicServices from './pages/demos/clinic/ClinicServices';

// University
import UniversityLayout from './pages/demos/university/UniversityLayout';
import UniversityHome from './pages/demos/university/UniversityHome';
import UniversityFaculties from './pages/demos/university/UniversityFaculties';
import UniversityCampus from './pages/demos/university/UniversityCampus';
import UniversityAdmissions from './pages/demos/university/UniversityAdmissions';

// Supermarket
import SupermarketLayout from './pages/demos/supermarket/SupermarketLayout';
import SupermarketHome from './pages/demos/supermarket/SupermarketHome';
import SupermarketShop from './pages/demos/supermarket/SupermarketShop';
import SupermarketDeals from './pages/demos/supermarket/SupermarketDeals';
import SupermarketRecipes from './pages/demos/supermarket/SupermarketRecipes';

// Company
import CompanyLayout from './pages/demos/company/CompanyLayout';
import CompanyHome from './pages/demos/company/CompanyHome';
import CompanyServices from './pages/demos/company/CompanyServices';
import CompanyAbout from './pages/demos/company/CompanyAbout';
import CompanyContact from './pages/demos/company/CompanyContact';

// Agency
import AgencyLayout from './pages/demos/agency/AgencyLayout';
import AgencyHome from './pages/demos/agency/AgencyHome';
import AgencyWork from './pages/demos/agency/AgencyWork';
import AgencyServices from './pages/demos/agency/AgencyServices';
import AgencyContact from './pages/demos/agency/AgencyContact';

// Admin
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';


// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem('hasLoaded');
  });

  const handleLoadComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('hasLoaded', 'true');
  };

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onComplete={handleLoadComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <Routes>
          {/* Main Site Routes */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
          <Route path="/terms" element={<Layout><Terms /></Layout>} />

          {/* --- Nested Demo Routes --- */}

          {/* Restaurant */}
          <Route path="/demo/restaurant" element={<RestaurantLayout />}>
            <Route index element={<RestaurantHome />} />
            <Route path="menu" element={<RestaurantMenu />} />
            <Route path="reservation" element={<RestaurantReservation />} />
            <Route path="events" element={<RestaurantEvents />} />
          </Route>

          {/* Clinic */}
          <Route path="/demo/clinic" element={<ClinicLayout />}>
            <Route index element={<ClinicHome />} />
            <Route path="doctors" element={<ClinicDoctors />} />
            <Route path="appointment" element={<ClinicAppointment />} />
            <Route path="services" element={<ClinicServices />} />
          </Route>

          {/* University */}
          <Route path="/demo/university" element={<UniversityLayout />}>
            <Route index element={<UniversityHome />} />
            <Route path="faculties" element={<UniversityFaculties />} />
            <Route path="campus" element={<UniversityCampus />} />
            <Route path="admissions" element={<UniversityAdmissions />} />
          </Route>

          {/* Supermarket */}
          <Route path="/demo/supermarket" element={<SupermarketLayout />}>
            <Route index element={<SupermarketHome />} />
            <Route path="shop" element={<SupermarketShop />} />
            <Route path="deals" element={<SupermarketDeals />} />
            <Route path="recipes" element={<SupermarketRecipes />} />
          </Route>

          {/* Company */}
          <Route path="/demo/company" element={<CompanyLayout />}>
            <Route index element={<CompanyHome />} />
            <Route path="services" element={<CompanyServices />} />
            <Route path="about" element={<CompanyAbout />} />
            <Route path="contact" element={<CompanyContact />} />
          </Route>

          {/* Agency */}
          <Route path="/demo/agency" element={<AgencyLayout />}>
            <Route index element={<AgencyHome />} />
            <Route path="work" element={<AgencyWork />} />
            <Route path="services" element={<AgencyServices />} />
            <Route path="contact" element={<AgencyContact />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Layout><Home /></Layout>} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
