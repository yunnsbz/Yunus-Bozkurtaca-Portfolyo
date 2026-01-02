
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

  /**
   * Mailto bağlantısının çalışıp çalışmadığını anlamaya çalışan fonksiyon.
   * Eğer mail uygulaması odağı çalmazsa (blur olmazsa), iletişim formuna kaydırır.
   */
  const handleContactAction = () => {
    const mailtoUrl = "mailto:yunus21bzkrtc@gmail.com";
    let wasBlurred = false;

    // Pencere odağını kaybederse mail uygulaması açılmış demektir
    const onBlur = () => {
      wasBlurred = true;
    };

    window.addEventListener('blur', onBlur);

    // Mailto'yu tetikle
    window.location.href = mailtoUrl;

    // 500ms bekle, eğer hala buradaysak ve blur olmadıysa fallback çalıştır
    setTimeout(() => {
      window.removeEventListener('blur', onBlur);
      if (!wasBlurred) {
        console.log("Mail istemcisi algılanamadı, forma yönlendiriliyor...");
        handleNavClick('contact');
      }
    }, 500);
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
        <button 
          onClick={handleContactAction}
          className={`px-5 py-2 text-sm font-bold rounded-full transition-all active:scale-95 ${
            isScrolled || isHome
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-white text-black hover:bg-gray-200'
          }`}
        >
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Header;
