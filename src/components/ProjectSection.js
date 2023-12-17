// src/components/ProjectSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';


const ProjectSection = () => {
  // Dummy project data
  const projects = [
    { id: 1, title: "NoWait Usability Testing and Feature Recommendations", image: "images/no-wait-usability-1.png", description: "NoWait approached our team to conduct a comprehensive usability testing of their restaurant management application." },
    // ... more projects
  ];

  return (
    <div className="container mx-auto px-6 py-20" id="projects">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Projects</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map(project => (
          <div key={project.id} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={project.image} alt="Thumbnail"/>
            <div className="px-6 py-4">
              <Link to={`/projects/${project.id}`}>
                <div className="font-bold text-xl mb-2">{project.title}</div>
              </Link>
              <p className="text-gray-700 text-base">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
