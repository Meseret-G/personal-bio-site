import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createProject, updateProject } from '../../Helpers/ProjectData';

const initialState = {
  name: '',
  description: '',
  appUrl: '',
  githubUrl: '',
};
export default function AdminProjectForm({ project = {} }) {
  const [formInput, setFormInput] = useState(initialState);
  // const { firebaseKey } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (project.firebaseKey) {
      setFormInput({
        name: project.name,
        description: project.description,
        appUrl: project.appUrl,
        githubUrl: project.githubUrl,
      });
    }
  }, [project]);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const resetForm = () => {
    setFormInput(initialState);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (project.firebaseKey) {
      updateProject(project.firebaseKey, formInput).then(() => {
        history.push('/editProjectView');
      });
    } else {
      createProject({ ...formInput }).then(() => {
        resetForm();
        history.push('/editProjectView');
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <div className="form-group">
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="project-name"
            placeholder="Project Name"
            value={formInput.name || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Project Description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            id="description"
            placeholder="Project Description"
            value={formInput.description || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectAppUrl">Application Url</label>
          <input
            type="text"
            name="appUrl"
            className="form-control"
            id="projectAppUrl"
            placeholder="App Url"
            value={formInput.appUrl || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="githubUrl">Github Url</label>
          <input
            type="text"
            name="githubUrl"
            className="form-control"
            id="githubUrl"
            placeholder="Github Url"
            value={formInput.githubUrl || ''}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          {' '}
          Submit
        </button>
      </form>
    </div>
  );
}

AdminProjectForm.propTypes = {
  project: PropTypes.shape({}),
};
AdminProjectForm.defaultProps = { project: {} };
