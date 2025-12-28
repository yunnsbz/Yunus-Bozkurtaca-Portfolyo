
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link 
      to={`/project/${project.id}`} 
      className="group block"
    >
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <span className="text-white font-bold flex items-center gap-2">
              View Project <span>→</span>
            </span>
          </div>
        </div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              {project.category}
            </span>
            <span className="text-xs font-medium text-gray-400">
              {project.date.split(' ')[0]}
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-3 group-hover:text-black transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
