import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/projects#${project.id}`} className="block group">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden h-full transition-all duration-300 group-hover:shadow-xl group-hover:border-red-300 group-hover:-translate-y-1">
            <img className="h-56 w-full object-cover" src={project.images[0].src} alt={`${project.title} ${project.images[0].label}`} />
            <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors break-words">
                    {project.title}
                </h3>
                <p className="text-md text-red-700 font-medium mb-3">{project.subtitle}</p>
                <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map(tech => (
                        <span key={tech} className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    </Link>
  );
};

export default ProjectCard;