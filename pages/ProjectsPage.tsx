import React, { useState, useMemo, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Project } from '../types';
import Section from '../components/Section';
import Lightbox from '../components/Lightbox';

const projectCategories = ['All', 'Training', 'Engineering Project', 'Internship'];
type SortByType = 'Timeline' | 'Curiosity';
type TrainingSubCategory = 'All' | 'Digital' | 'Analog';


const ProjectsPage: React.FC = () => {
  const { projects, curiosityProjectIds } = portfolioData;

  const [lightboxData, setLightboxData] = useState<{ images: { src: string; label: string }[]; startIndex: number } | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSubCategory, setActiveSubCategory] = useState<TrainingSubCategory>('All');
  const [sortBy, setSortBy] = useState<SortByType>('Timeline');
  
  // When the main category changes, reset the sub-category filter
  useEffect(() => {
    setActiveSubCategory('All');
  }, [activeCategory]);

  const openLightbox = (project: Project, imageIndex: number) => {
    setLightboxData({
      images: project.images,
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

    if (activeCategory === 'Training') {
      const digitalOrder = ['inverter', 'nand-gate', 'nor-gate', 'and-gate', 'or-gate', 'xnor-gate', 'dff'];
      const analogOrder = ['level-shifter', 'common-amplifier', 'bandgap-ref', 'dac', 'pll', 'sram'];
      
      const getOrder = (project: Project) => {
        if (project.subCategory === 'Digital') {
          const index = digitalOrder.indexOf(project.id);
          return index === -1 ? Infinity : index;
        }
        if (project.subCategory === 'Analog') {
          const index = analogOrder.indexOf(project.id);
          // Offset to ensure analog projects are sorted correctly within their own group
          return index === -1 ? Infinity : index + digitalOrder.length; 
        }
        return Infinity;
      };
      
      return [...filtered].sort((a, b) => getOrder(a) - getOrder(b));
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

  const ProjectCard = ({ project }: { project: Project }) => (
    <div key={project.id} id={project.id} className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200 transition-shadow hover:shadow-xl">
      <div className="mb-6">
        <h3 className="text-3xl font-bold text-gray-900 break-words">{project.title}</h3>
        <p className="text-lg text-red-600 font-semibold mt-1">{project.subtitle}</p>
        <p className="mt-4 text-gray-600">{project.description}</p>
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8`}>
        {project.images.map((image, index) => (
          <div key={image.src} className="flex flex-col items-center">
            <img 
              src={image.src} 
              alt={`${project.title} ${image.label}`} 
              className="w-full h-auto rounded-md shadow-md object-cover border-2 border-gray-200 cursor-pointer transition-transform hover:scale-105 mb-2"
              onClick={() => openLightbox(project, index)}
            />
            <h4 className="text-md font-semibold text-center text-gray-800">{image.label}</h4>
          </div>
        ))}
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
  );

  return (
    <>
      <Section title="My Projects">
        <div className="sticky top-[81px] z-30 bg-gray-50/95 backdrop-blur-sm py-4 rounded-xl shadow-sm flex flex-col items-center justify-center mb-12 space-y-4">
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
        
        {activeCategory === 'Training' ? (
          <>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
                {(['All', 'Digital', 'Analog'] as TrainingSubCategory[]).map(subCat => (
                    <button
                        key={subCat}
                        onClick={() => setActiveSubCategory(subCat)}
                        className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${
                            activeSubCategory === subCat
                            ? 'bg-red-500 text-white shadow-sm'
                            : 'bg-white text-gray-600 hover:bg-red-100 border border-gray-300'
                        }`}
                    >
                        {subCat === 'Digital' ? 'Digital Standard Cells' : subCat === 'Analog' ? 'Analog Blocks' : 'All'}
                    </button>
                ))}
            </div>

            {(activeSubCategory === 'All' || activeSubCategory === 'Digital') && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-red-200 pb-2">Digital Standard Cells</h2>
                <div className="space-y-12">
                  {filteredAndSortedProjects
                    .filter(p => p.subCategory === 'Digital')
                    .map(project => <ProjectCard key={project.id} project={project} />)
                  }
                </div>
              </div>
            )}
            
            {(activeSubCategory === 'All' || activeSubCategory === 'Analog') && (
              <div className={activeSubCategory === 'All' ? 'mt-16' : ''}>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-red-200 pb-2">Analog Blocks</h2>
                <div className="space-y-12">
                  {filteredAndSortedProjects
                    .filter(p => p.subCategory === 'Analog')
                    .map(project => <ProjectCard key={project.id} project={project} />)
                  }
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="space-y-12">
            {filteredAndSortedProjects.map(project => <ProjectCard key={project.id} project={project} />)}
          </div>
        )}
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