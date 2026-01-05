import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import DownloadIcon from '../components/icons/DownloadIcon';

const HomePage: React.FC = () => {
  const { personalInfo, skills, experience, education, projects, resumeUrl, curiosityProjectIds } = portfolioData;

  const featuredProjects = projects.filter(p => curiosityProjectIds.includes(p.id))
    .sort((a, b) => curiosityProjectIds.indexOf(a.id) - curiosityProjectIds.indexOf(b.id));

  // Extract filename from the URL path to ensure the correct name is suggested on download.
  const resumeFilename = resumeUrl.substring(resumeUrl.lastIndexOf('/') + 1);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 bg-gray-50">
        {personalInfo.hero?.backgroundImageUrl && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${personalInfo.hero.backgroundImageUrl})` }}
              aria-hidden="true"
            ></div>
          </>
        )}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div 
                className="max-w-4xl mx-auto backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-2xl text-center"
                style={{ backgroundColor: personalInfo.hero?.contentBoxColor || 'rgba(255, 255, 255, 0.95)' }}
            >
                <img 
                    src={personalInfo.profilePicUrl} 
                    alt={personalInfo.name} 
                    className="w-40 h-40 sm:w-52 sm:h-52 rounded-2xl mx-auto -mt-24 sm:-mt-36 mb-6 border-4 border-white shadow-lg"
                />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                    {personalInfo.name}
                </h1>
                <p className="mt-4 text-xl sm:text-2xl font-semibold text-red-600">
                    {personalInfo.title}
                </p>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-700">
                    {personalInfo.summary}
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link 
                    to="/projects" 
                    className="bg-red-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all transform hover:scale-105 font-bold text-lg"
                    >
                    View My Work
                    </Link>
                    <a 
                    href={resumeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    download={resumeFilename}
                    className="bg-white text-gray-800 px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-all transform hover:scale-105 font-bold text-lg border border-gray-300 flex items-center gap-2"
                    >
                    <DownloadIcon className="w-5 h-5" />
                    Download Resume
                    </a>
                </div>
            </div>
        </div>
      </section>

      {/* About Me Section */}
      <Section title="About Me">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            {personalInfo.aboutMe}
          </p>
        </div>
      </Section>

      {/* Skills Section */}
      <Section title="Technical Skills" className="bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map(category => (
            <div key={category.title} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 h-full">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map(skill => (
                  <li key={skill} className="text-gray-600">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Experience Section */}
      <Section title="Professional Experience">
        <div className="max-w-4xl mx-auto space-y-12">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-8 sm:pl-10">
              <div className="absolute left-0 top-1 h-full w-0.5 bg-red-200"></div>
              <div className="absolute left-[-5px] top-1 w-4 h-4 rounded-full bg-red-600 border-4 border-white shadow"></div>
              <p className="text-sm text-gray-500 mb-1">{job.period}</p>
              <h3 className="text-2xl font-bold text-gray-900">{job.role}</h3>
              <p className="text-lg text-red-700 font-semibold mb-3">{job.company}</p>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                {job.description.map((desc, i) => <li key={i}>{desc}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Featured Projects Section */}
      <Section title="Featured Projects" className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
            <Link to="/projects" className="text-red-600 font-semibold text-lg hover:underline">
                View All Projects &rarr;
            </Link>
        </div>
      </Section>
      
      {/* Education Section */}
      <Section title="Education">
        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <p className="text-sm text-gray-500 mb-1">{edu.period}</p>
              <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
              <p className="text-md text-gray-600">{edu.institution}</p>
              {edu.score && <p className="text-md text-red-700 font-semibold mt-1">{edu.score}</p>}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default HomePage;