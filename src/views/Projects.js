import React, { useState, useEffect } from 'react';
import getProjects from '../Helpers/ProjectData';
import ProjectCards from '../components/Projects/ProjectCards';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getProjects().then((projectArray) => {
      if (isMounted) setProjects(projectArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      <>
        {projects.map((project) => (
          <ProjectCards key={project.firebaseKey} project={project} />
        ))}
      </>
    </div>
  );
}
