// src/ProjectPages/ProjectPageTemplate.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { readFile } from '../utils/readMarkdown'; // Utility function you might implement to read Markdown files

const ProjectPageTemplate = () => {
  const { projectId } = useParams();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    // Assuming you have a utility function to fetch the markdown content
    // Replace `readFile` with your actual function to fetch/read the markdown file
    readFile(`project${projectId}.md`).then(setMarkdown);
  }, [projectId]);

  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default ProjectPageTemplate;
