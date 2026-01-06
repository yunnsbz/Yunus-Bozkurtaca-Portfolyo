
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/' || location.pathname === '/projects' || location.pathname === '/contact';

  const handleNavClick = (sectionId: string) => {
    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        navigate(`/${sectionId}`, { replace: true });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const handleContactAction = () => {
    const mailtoUrl = "mailto:yunus21bzkrtc@gmail.com";
    let wasBlurred = false;
    const onBlur = () => wasBlurred = true;
    window.addEventListener('blur', onBlur);
    window.location.href = mailtoUrl;
    setTimeout(() => {
      window.removeEventListener('blur', onBlur);
      if (!wasBlurred) handleNavClick('contact');
    }, 800);
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
        
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNavClick('projects')}
            className={`text-sm font-semibold transition-colors ${
              isScrolled || isHome ? 'text-gray-600 hover:text-black' : 'text-white/70 hover:text-white'
            }`}
          >
            {t('nav_projects')}
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`text-sm font-semibold transition-colors ${
              isScrolled || isHome ? 'text-gray-600 hover:text-black' : 'text-white/70 hover:text-white'
            }`}
          >
            {t('nav_contact')}
          </button>

          {/* Language Switcher */}
          <div className={`flex items-center gap-2 px-2 py-1 rounded-full border transition-all ${
            isScrolled || isHome ? 'border-gray-200' : 'border-white/20'
          }`}>
            <button 
              onClick={() => setLanguage('tr')}
              className={`text-[10px] font-black px-2 py-1 rounded-full transition-all ${
                language === 'tr' 
                  ? (isScrolled || isHome ? 'bg-black text-white' : 'bg-white text-black')
                  : (isScrolled || isHome ? 'text-gray-400' : 'text-white/40')
              }`}
            >
              TR
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`text-[10px] font-black px-2 py-1 rounded-full transition-all ${
                language === 'en' 
                  ? (isScrolled || isHome ? 'bg-black text-white' : 'bg-white text-black')
                  : (isScrolled || isHome ? 'text-gray-400' : 'text-white/40')
              }`}
            >
              EN
            </button>
          </div>
        </div>

        <button 
          onClick={handleContactAction}
          className={`px-5 py-2 text-sm font-bold rounded-full transition-all active:scale-95 ${
            isScrolled || isHome
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-white text-black hover:bg-gray-200'
          }`}
        >
          {t('nav_cta')}
        </button>
      </div>
    </nav>
  );
};

export default Header;
