import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { getSingleProject } from '../Helpers/ProjectData';
import AdminProjectForm from '../components/AdminComponents/AdminProjectForm';
import { signOutUser } from '../api/auth';

export default function AdminEditView({ user }) {
  const [editProject, setEditProject] = useState({});
  const { firebaseKey } = useParams();
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleProject(firebaseKey).then(setEditProject);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <AdminProjectForm project={editProject} user={user} />
      <Button
        type="button"
        onClick={() => {
          signOutUser().then(() => {
            history.push('/');
          });
        }}
      />
      SignOut
    </div>
  );
}

AdminEditView.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};
AdminEditView.defaultProps = {
  user: null,
};
