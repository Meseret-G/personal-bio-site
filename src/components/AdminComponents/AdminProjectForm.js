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
export default function AdminProjectForm({ obj = {} }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput(obj);
    }
  }, [obj]);

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
    if (obj.firebaseKey) {
      updateProject(formInput).then(() => {
        history.push('/projects');
      });
    } else {
      createProject({ ...formInput }).then(() => {
        resetForm();
        history.push('/projects');
      });
    }
  };
  return (
    <div className="project-form">
      <form onSubmit={handleClick}>
        <div className="form-group">
          <input
            onChange={(e) => handleChange(e)}
            value={formInput.name || ''}
            type="text"
            name="name"
            className="form-control"
            id="projectName"
            placeholder="Project Name"
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => handleChange(e)}
            value={formInput.description || ''}
            type="text"
            name="description"
            className="form-control"
            id="projectDescription"
            placeholder="Project Description"
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => handleChange(e)}
            value={formInput.appUrl || ''}
            type="text"
            name="appUrl"
            className="form-control"
            id="projectAppUrl"
            placeholder="App Url"
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => handleChange(e)}
            value={formInput.githubUrl || ''}
            type="text"
            name="githubUrl"
            className="form-control"
            id="githubUrl"
            placeholder="Github Url"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}

AdminProjectForm.propTypes = {
  obj: PropTypes.shape({}),
};
AdminProjectForm.defaultProps = {
  obj: {},
};
