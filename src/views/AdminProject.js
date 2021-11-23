import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { getSingleProject } from '../Helpers/ProjectData';
import AdminProjectForm from '../components/AdminComponents/AdminProjectForm';
import { signOutUser } from '../api/auth';

export default function AdminProject({ user }) {
  const [editItem, setEditItem] = useState({});
  const { key } = useParams();
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleProject(key).then(setEditItem);
    }
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      <AdminProjectForm obj={editItem} user={user} />
      <button
        type="button"
        onClick={() => {
          signOutUser().then(() => {
            history.push('/');
          });
        }}
      >
        Sign Out
      </button>
    </div>
  );
}
AdminProject.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};
AdminProject.defaultProps = {
  user: null,
};
