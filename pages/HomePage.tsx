
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
import ContactForm from '../components/ContactForm';
import { ProjectCategory } from '../types';
import { PROJECTS } from '../constants';

const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string };
    if (state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(state.scrollTo!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.categories.includes(activeCategory as ProjectCategory));

  const categories: (ProjectCategory | 'All')[] = [
    'All', 
    ProjectCategory.GAME_MAKING, 
    ProjectCategory.TOOL_MAKING, 
    ProjectCategory.MOBILE, 
    ProjectCategory.DESKTOP
  ];

  return (
    <div className="space-y-20 pb-20">
      <Hero />
      
      <section id="projects" className="max-w-7xl mx-auto px-6 scroll-mt-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-2">Select Projects</h2>
            <p className="text-gray-600 max-w-lg">
              I explore the limits of game engines, software tools, and digital ecosystems.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-black text-white' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <ProjectGrid projects={filteredProjects} />
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 text-center pt-10 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>
        <p className="text-xl text-gray-600 mb-8">
          I’m always open to new challenges, collaborations, and opportunities to grow professionally.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a 
            href="mailto:yunus21bzkrtc@gmail.com" 
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all"
          >
            <span className="text-2xl">✉️</span>
            <span className="font-medium">E-posta</span>
          </a>
          <a 
            href="https://linkedin.com/in/yunusbozkurtaca" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all"
          >
            <span className="text-2xl">🔗</span>
            <span className="font-medium">LinkedIn</span>
          </a>
          <a 
            href="https://github.com/yunnsbz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all"
          >
            <span className="text-2xl">💻</span>
            <span className="font-medium">GitHub</span>
          </a>
        </div>

        {/* Yeni Direkt İletişim Formu */}
        <ContactForm />
      </section>
    </div>
  );
};

export default HomePage;
