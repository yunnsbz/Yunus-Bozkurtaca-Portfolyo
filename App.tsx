
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider } from './LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<HomePage />} />
              <Route path="/contact" element={<HomePage />} />
              <Route path="/project/:projectId" element={<ProjectDetailPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;
