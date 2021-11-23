import React, { useState, useEffect } from 'react';
import { getProjects } from '../../Helpers/ProjectData';
import ProjectCard from '../Projects/ProjectCards';

export default function EditProjectView() {
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
          <ProjectCard
            key={project.firebaseKey}
            project={project}
            setProjects={setProjects}
          />
        ))}
      </>
    </div>
  );
}
