import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProjects } from '../Helpers/ProjectData';
import ProjectCards from '../components/Projects/ProjectCards';

export default function Projects({ user }) {
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
        {user?.isAdmin && <Link to="/createProject"> Create Project </Link>}
        {projects.map((project) => (
          <ProjectCards
            key={project.firebaseKey}
            project={project}
            setProjects={setProjects}
            user={user}
          />
        ))}
      </>
    </div>
  );
}
Projects.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};
Projects.defaultProps = {
  user: null,
};
