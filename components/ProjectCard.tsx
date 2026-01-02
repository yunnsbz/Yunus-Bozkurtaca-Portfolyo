
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const coverImage = project.images.length > 0 ? project.images[0] : 'https://via.placeholder.com/800x600?text=No+Image';
  
  return (
    <Link 
      to={`/project/${project.id}`} 
      className="group block"
    >
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 h-full flex flex-col">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img 
            src={coverImage} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <span className="text-white font-bold flex items-center gap-2">
              View Project <span>→</span>
            </span>
          </div>
        </div>
        <div className="p-8 flex-grow flex flex-col">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.categories.map((cat, idx) => (
              <span key={idx} className="text-[10px] font-black uppercase tracking-wider text-gray-400 border-r border-gray-200 pr-2 last:border-0 last:pr-0">
                {cat}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold mb-3 group-hover:text-black transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 line-clamp-2 leading-relaxed flex-grow">
            {project.shortDescription}
          </p>
          <div className="mt-4 pt-4 border-t border-gray-50">
             <span className="text-xs font-medium text-gray-400">
                {project.date}
             </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
