
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Ana Sayfa ve Alias Rotalar */}
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<HomePage />} />
            <Route path="/contact" element={<HomePage />} />
            
            {/* Proje Detay Sayfası - ID eşleşmesi için daha spesifik tanımlandı */}
            <Route path="/project/:projectId" element={<ProjectDetailPage />} />
            
            {/* Tanımsız her şeyi ana sayfaya yönlendir (Sadece hiçbir rota eşleşmezse) */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
