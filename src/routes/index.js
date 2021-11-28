import React from 'react';
import PropTypes from 'prop-types';
import AdminRoutes from './AdminRoutes';
import PublicRoutes from './PublicRoutes';

export default function Routes({ user }) {
  return (
    <div>
      {user?.isAdmin && <AdminRoutes user={user} />}
      <PublicRoutes user={user} />
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};
Routes.defaultProps = { user: null };
