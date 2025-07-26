import React, { useState } from 'react';
import AdminPanel from './components/Admin/AdminPanel';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import './index.css';

function App() {
  const [showAdminOption] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleAdminSave = (newConfig) => {
    // Force re-render of the entire app with new config and services
    setRefreshKey(prev => prev + 1);

    // Apply theme changes immediately
    const root = document.documentElement;
    root.style.setProperty('--primary-color', newConfig.theme.primaryColor);
    root.style.setProperty('--secondary-color', newConfig.theme.secondaryColor);
    root.style.setProperty('--accent-color', newConfig.theme.accentColor);
    document.body.style.fontFamily = `'${newConfig.theme.fontFamily}', sans-serif`;

    // Update document title
    document.title = newConfig.meta.title;
  };

  return (
    <div className="App" key={refreshKey}>
      <Header />
      <Hero />
      <ServicesSection />
      <Footer />

      {/* Floating Admin Button */}
      {showAdminOption && <button
        className="admin-toggle-btn"
        onClick={() => setShowAdmin(true)}
        title="Open Admin Panel"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--primary-color), #b8941f)',
          color: 'white',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
        }}
      >
        ⚙️
      </button>}

      {/* Admin Panel */}
      {showAdmin && (
        <AdminPanel
          onClose={() => setShowAdmin(false)}
          onSave={handleAdminSave}
        />
      )}
    </div>
  );
}

export default App; 