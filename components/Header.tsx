
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ana sayfada mıyız kontrolü
  const isHome = location.pathname === '/' || location.pathname === '/projects' || location.pathname === '/contact';

  const handleNavClick = (sectionId: string) => {
    if (isHome) {
      // Eğer ana sayfadaysak sadece aşağı kaydır
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        navigate(`/${sectionId}`, { replace: true });
      }
    } else {
      // Proje sayfasındaysak ana sayfaya git ve oradan kaydır
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className={`text-2xl font-black tracking-tighter transition-colors ${
            isScrolled || isHome ? 'text-black' : 'text-white'
          }`}
        >
          YB.
        </Link>
        <div className="hidden md:flex gap-8">
          <button
            onClick={() => handleNavClick('projects')}
            className={`text-sm font-semibold transition-colors ${
              isScrolled || isHome 
                ? 'text-gray-600 hover:text-black' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`text-sm font-semibold transition-colors ${
              isScrolled || isHome 
                ? 'text-gray-600 hover:text-black' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            Contact
          </button>
        </div>
        <a 
          href="mailto:yunus21bzkrtc@gmail.com"
          className={`px-5 py-2 text-sm font-bold rounded-full transition-all ${
            isScrolled || isHome
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-white text-black hover:bg-gray-200'
          }`}
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Header;
