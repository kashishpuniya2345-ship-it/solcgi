import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';
import CareerPage from './pages/CareerPage';
import JobApplicationPage from './pages/JobApplicationPage';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <div className="animate-fade-in">{children}</div>;
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HashRouter>
      <div className="relative flex flex-col min-h-screen bg-soul-dark">
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <main className={`flex-grow pt-20 transition-filter duration-300 ${isMenuOpen ? 'blur-sm' : ''}`}>
            <Routes>
              <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
              <Route path="/portfolio" element={<PageWrapper><PortfolioPage /></PageWrapper>} />
              <Route path="/portfolio/:projectId" element={<PageWrapper><PortfolioDetailPage /></PageWrapper>} />
              <Route path="/career" element={<PageWrapper><CareerPage /></PageWrapper>} />
              <Route path="/career/:jobId" element={<PageWrapper><JobApplicationPage /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;