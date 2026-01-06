
import React from 'react';
import { Link } from 'react-router-dom';
import { Project, CategoryTranslations } from '../types';
import LazyImage from './LazyImage';
import { useLanguage } from '../LanguageContext';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { language } = useLanguage();
  const coverImage = project.images.length > 0 ? project.images[0] : 'https://via.placeholder.com/800x600?text=No+Image';

  return (
    <Link to={`/project/${project.id}`} className="group block">
      <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 h-full flex flex-col">
        
        {/* Modern Image Container with Blurred Backdrop */}
        <div className="aspect-video overflow-hidden relative bg-gray-900">
          {/* Blurred Background Layer */}
          <div 
            className="absolute inset-0 bg-cover bg-center blur-xl opacity-40 scale-110"
            style={{ backgroundImage: `url('${coverImage}')` }}
          />
          
          {/* Main Image Layer (No Cropping) */}
          <div className="absolute inset-0 flex items-center justify-center p-2">
            <LazyImage 
              src={coverImage} 
              alt={project.title[language]} 
              containerClassName="w-full h-full"
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm shadow-xl flex items-center gap-2">
              {language === 'tr' ? 'Projeyi İncele' : 'Explore Project'} <span>→</span>
            </div>
          </div>
        </div>

        <div className="p-7 md:p-8 flex-grow flex flex-col">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.categories.map((cat, idx) => (
              <span key={idx} className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                {CategoryTranslations[language][cat]}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-black transition-colors leading-tight">
            {project.title[language]}
          </h3>
          
          <p className="text-gray-500 text-sm md:text-base line-clamp-2 leading-relaxed flex-grow">
            {project.shortDescription[language]}
          </p>
          
          <div className="mt-6 pt-5 border-t border-gray-50 flex items-center justify-between">
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                {project.date[language]}
             </span>
             <div className="flex gap-1">
               {project.techStack.slice(0, 3).map(tech => (
                 <div key={tech} className="w-1.5 h-1.5 rounded-full bg-gray-200" title={tech} />
               ))}
             </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
