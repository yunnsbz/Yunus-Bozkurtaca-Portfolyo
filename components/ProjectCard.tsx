
import React from 'react';
import { Link } from 'react-router-dom';
import { Project, CategoryTranslations, StatusTranslations, ProjectStatus } from '../types';
import LazyImage from './LazyImage';
import { useLanguage } from '../LanguageContext';

interface ProjectCardProps {
  project: Project;
}

const STATUS_STYLES: Record<ProjectStatus, string> = {
  [ProjectStatus.ONGOING]: 'bg-amber-50/95 text-amber-700 border-amber-200',
  [ProjectStatus.RELEASED]: 'bg-emerald-50/95 text-emerald-700 border-emerald-200',
  [ProjectStatus.COMPLETED]: 'bg-white/95 text-gray-500 border-gray-200'
};

const VISIBLE_TECH_COUNT = 3;

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { language } = useLanguage();
  const coverImage = project.images[0]?.src;
  const visibleTech = project.techStack.slice(0, VISIBLE_TECH_COUNT);
  const hiddenTechCount = project.techStack.length - visibleTech.length;

  return (
    <Link to={`/project/${project.id}`} className="group block">
      <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 h-full flex flex-col">

        <div className="aspect-video overflow-hidden relative bg-gray-900">
          <span
            className={`absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-black uppercase tracking-wider backdrop-blur-md ${STATUS_STYLES[project.status]}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {StatusTranslations[language][project.status]}
          </span>

          {coverImage ? (
            <>
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
            </>
          ) : (
            /* Projects with no presentable screenshots yet. */
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-gray-800 via-gray-900 to-black px-6 text-center">
              <svg className="w-8 h-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
              </svg>
              <span className="text-white/40 text-[11px] font-bold uppercase tracking-[0.15em]">
                {language === 'tr' ? 'Görseller hazırlanıyor' : 'Visuals in progress'}
              </span>
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm shadow-xl flex items-center gap-2">
              {language === 'tr' ? 'Projeyi İncele' : 'Explore Project'} <span>→</span>
            </div>
          </div>
        </div>

        <div className="p-7 md:p-8 flex-grow flex flex-col">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.categories.map((cat) => (
              <span key={cat} className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
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

          <div className="mt-6 pt-5 border-t border-gray-100 space-y-3">
            <div className="flex flex-wrap gap-1.5">
              {visibleTech.map((tech) => (
                <span key={tech} className="px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-md text-[11px] font-semibold text-gray-600">
                  {tech}
                </span>
              ))}
              {hiddenTechCount > 0 && (
                <span
                  className="px-2.5 py-1 rounded-md text-[11px] font-semibold text-gray-400"
                  title={project.techStack.slice(VISIBLE_TECH_COUNT).join(', ')}
                >
                  +{hiddenTechCount}
                </span>
              )}
            </div>

            <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              {project.date[language]}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
