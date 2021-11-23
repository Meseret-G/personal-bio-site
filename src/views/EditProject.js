import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProject } from '../Helpers/ProjectData';
import AdminProjectForm from '../components/AdminComponents/AdminProjectForm';

export default function AdminEditView() {
  const [editItem, setEditItem] = useState({});
  const { firebaseKey } = useParams();
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleProject(firebaseKey).then(setEditItem);
    }
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      <AdminProjectForm project={editItem} />
    </div>
  );
}
