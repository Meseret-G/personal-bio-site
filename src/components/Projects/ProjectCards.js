import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card, Button, CardBody, CardTitle, CardSubtitle,
} from 'reactstrap';
import { deleteProject } from '../../Helpers/ProjectData';

export default function ProjectCard({ project, user, setProjects }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteProject(project.firebaseKey).then((projectArray) => setProjects(projectArray));
    }
  };
  return (
    <div>
      <div className="project-container">
        <Card className="projectcard">
          <CardBody className="cardbody">
            <CardTitle className="protitle">{project.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted">
              {project.description}
            </CardSubtitle>
          </CardBody>
          <CardBody>
            <Button className="card-title" href={project.appUrl}>
              {' '}
              Deployed App
            </Button>
            <Button className="card-title" href={project.githubUrl}>
              Code Base in Github{' '}
            </Button>
            {user?.isAdmin && (
              <Link
                className="btn btn-danger"
                to={`/edit/${project.firebaseKey}`}
              >
                Edit
              </Link>
            )}
            {user?.isAdmin && (
              <Button
                type="button"
                onClick={() => handleClick('delete')}
                color="danger"
              >
                Delete
              </Button>
            )}
          </CardBody>
        </Card>
      </div>
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
