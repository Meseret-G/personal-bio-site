import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteProject } from '../../Helpers/ProjectData';

export default function ProjectCard({ project, user, setProjects }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteProject(project.firebaseKey).then((projectArray) => setProjects(projectArray));
    }
  };
  return (
    <div className="projects">
      <card className="project-card">
        <h6 className="card-title">{project.name}</h6>
        <p className="card-text">{project.description}</p>
        <a href={project.appUrl} className="link">
          Deployed App
        </a>
        <a href={project.githubUrl} className="github">
          Github
        </a>
        {user?.isAdmin && (
          <Link className="link" to={`/edit/${project.firebaseKey}`}>
            Edit
          </Link>
        )}
        {user?.isAdmin && (
          <button
            className="delete-project"
            type="button"
            onClick={() => handleClick('delete')}
            color="danger"
          >
            Delete
          </button>
        )}
      </card>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
    appUrl: PropTypes.string,
    githubUrl: PropTypes.string,
  }).isRequired,
  setProjects: PropTypes.func.isRequired,
  user: PropTypes.shape(PropTypes.obj),
};

ProjectCard.defaultProps = {
  user: null,
};
