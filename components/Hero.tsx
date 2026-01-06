
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-16 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-white">
      {/* Soft Background Accent */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-gray-50 rounded-full blur-[100px] z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* Mobile: Top | Desktop: Right */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[280px] md:max-w-[320px]">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img 
                  src="/images/photo.png" 
                  alt="Yunus Bozkurtaca Profile" 
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          {/* Mobile: Bottom | Desktop: Left */}
          <div className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-[10px] font-black uppercase tracking-[0.2em]">
                {t('hero_badge')}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-black">
              {t('hero_title').split('&').map((part, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span className="text-gray-300">&</span>}
                  {part}
                </React.Fragment>
              ))}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              {t('hero_desc').split('_name_').map((part, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span className="text-black font-semibold">Yunus Bozkurtaca</span>}
                  {part}
                </React.Fragment>
              ))}
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button 
                onClick={scrollToProjects}
                className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all transform hover:-translate-y-0.5 shadow-md active:scale-95 text-sm"
              >
                {t('hero_explore')}
              </button>
              <a 
                href="https://linkedin.com/in/yunusbozkurtaca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white border border-gray-200 text-black font-bold rounded-xl hover:border-black hover:bg-gray-50 transition-all active:scale-95 text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
