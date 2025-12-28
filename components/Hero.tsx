
import React from 'react';

const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[120px] opacity-50 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Computer Engineering Graduate
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-8">
            Building digital worlds <span className="text-gray-400">&</span> custom tools.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10">
            Hi, I'm <span className="text-black font-bold">Yunus Bozkurtaca</span>. I specialize in Game Development with Unity, creating robust Tool systems, and building high-quality Android applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={scrollToProjects}
              className="px-8 py-4 bg-black text-white font-bold rounded-2xl hover:bg-gray-800 transition-all transform hover:-translate-y-1"
            >
              Explore Projects
            </button>
            <a href="https://linkedin.com/in/yunusbozkurtaca" target="_blank" className="px-8 py-4 bg-white border border-gray-200 text-black font-bold rounded-2xl hover:border-black transition-all">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
