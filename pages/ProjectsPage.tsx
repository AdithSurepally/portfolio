import React, { useState, useMemo } from 'react';
import { portfolioData } from '../data/portfolioData.ts';
import { Project } from '../types.ts';
import Section from '../components/Section.tsx';
import Lightbox from '../components/Lightbox.tsx';

const projectCategories = ['All', 'Training', 'Engineering Project', 'Internship', 'Casual'];
type SortByType = 'Timeline' | 'Curiosity';

const ProjectsPage: React.FC = () => {
  const { projects, curiosityProjectIds } = portfolioData;

  const [lightboxData, setLightboxData] = useState<{ images: string[]; startIndex: number } | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState<SortByType>('Timeline');

  const openLightbox = (project: Project, imageIndex: number) => {
    setLightboxData({
      images: [project.schematicImg, project.layoutImg],
      startIndex: imageIndex,
    });
  };

  const closeLightbox = () => {
    setLightboxData(null);
  };

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects;
    if (activeCategory !== 'All') {
      filtered = projects.filter(p => p.category === activeCategory);
    }

    if (activeCategory === 'All' && sortBy === 'Curiosity') {
      const curiousProjects = filtered.filter(p => curiosityProjectIds.includes(p.id));
      const otherProjects = filtered.filter(p => !curiosityProjectIds.includes(p.id));
      const curiousOrderMap = new Map(curiosityProjectIds.map((id, index) => [id, index]));
      curiousProjects.sort((a, b) => (curiousOrderMap.get(a.id) ?? 99) - (curiousOrderMap.get(b.id) ?? 99));
      return [...curiousProjects, ...otherProjects];
    }

    // Default sort by date (Timeline)
    return [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [projects, activeCategory, sortBy, curiosityProjectIds]);

  return (
    <>
      <Section title="My Projects">
        <div className="sticky top-20 z-30 bg-gray-50/95 backdrop-blur-sm py-4 rounded-xl shadow-sm flex flex-col items-center justify-center mb-12 space-y-4">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {projectCategories.map(category => (
                <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${
                    activeCategory === category
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-red-100 border border-gray-300'
                }`}
                >
                {category}
                </button>
            ))}
            </div>

            {/* Sort Toggle */}
            {activeCategory === 'All' && (
            <div className="flex items-center space-x-2 bg-gray-200 rounded-full p-1">
                <button
                    onClick={() => setSortBy('Timeline')}
                    className={`px-4 py-1 text-sm rounded-full ${sortBy === 'Timeline' ? 'bg-white text-gray-800 shadow' : 'text-gray-600'}`}
                >
                    Timeline
                </button>
                <button
                    onClick={() => setSortBy('Curiosity')}
                    className={`px-4 py-1 text-sm rounded-full ${sortBy === 'Curiosity' ? 'bg-white text-gray-800 shadow' : 'text-gray-600'}`}
                >
                    Curiosity
                </button>
            </div>
            )}
        </div>

        <div className="space-y-12">
            {filteredAndSortedProjects.map((project) => (
                <div key={project.id} id={project.id} className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200 transition-shadow hover:shadow-xl">
                <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
                    <p className="text-lg text-red-600 font-semibold mt-1">{project.subtitle}</p>
                    <p className="mt-4 text-gray-600">{project.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                    <h4 className="text-xl font-semibold mb-3 text-center text-gray-800">Schematic</h4>
                    <img 
                        src={project.schematicImg} 
                        alt={`${project.title} Schematic`} 
                        className="w-full h-auto rounded-md shadow-md object-cover border-2 border-gray-200 cursor-pointer transition-transform hover:scale-105"
                        onClick={() => openLightbox(project, 0)}
                    />
                    </div>
                    <div>
                    <h4 className="text-xl font-semibold mb-3 text-center text-gray-800">Layout</h4>
                    <img 
                        src={project.layoutImg} 
                        alt={`${project.title} Layout`} 
                        className="w-full h-auto rounded-md shadow-md object-cover border-2 border-gray-200 cursor-pointer transition-transform hover:scale-105"
                        onClick={() => openLightbox(project, 1)}
                    />
                    </div>
                </div>
                
                <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3 text-gray-800">Key Learnings</h4>
                    <ul className="space-y-2 list-disc list-inside text-gray-700">
                    {project.keyLearnings.map((learning, i) => (
                        <li key={i}>{learning}</li>
                    ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-semibold mb-3 text-gray-800">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                        <span key={tech} className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">{tech}</span>
                    ))}
                    </div>
                </div>
                </div>
            ))}
        </div>
      </Section>
      {lightboxData && (
        <Lightbox
          images={lightboxData.images}
          startIndex={lightboxData.startIndex}
          onClose={closeLightbox}
        />
      )}
    </>
  );
};

export default ProjectsPage;