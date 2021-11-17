import React from 'react';
import PropTypes from 'prop-types';
import {
  CardLink,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap';

export default function Projects({ project }) {
  return (
    <div>
      <div>
        <Card>
          <CardBody>
            <CardTitle tag="h5">{project.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {project.description}
            </CardSubtitle>
          </CardBody>
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </CardText>
            <CardLink href="#">{project.appUrl}</CardLink>
            <CardLink href="#">{project.githubUrl}</CardLink>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
Projects.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
    appUrl: PropTypes.string,
    githubUrl: PropTypes.string,
  }).isRequired,
};
