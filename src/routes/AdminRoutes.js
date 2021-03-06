import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdminProjectForm from '../components/AdminComponents/AdminProjectForm';
import AdminProject from '../views/AdminProject';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  if (user === null) return user;
  const routeCheker = (burrito) => (user?.isAdmin ? (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...burrito} user={user} />
  ) : (
    <Redirect to={{ pathname: '/', state: { from: burrito.location } }} />
  ));

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} render={(props) => routeCheker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  user: PropTypes.shape(PropTypes.obj),
};
PrivateRoute.defaultProps = {
  user: null,
};

export default function AdminRoutes({ user }) {
  return (
    <div>
      <Switch>
        <PrivateRoute
          exact
          path="/edit/:key"
          user={user}
          component={() => <AdminProject user={user} />}
        />
        <PrivateRoute
          exact
          path="/createproject"
          user={user}
          component={() => <AdminProjectForm obj={{}} user={user} />}
        />
      </Switch>
    </div>
  );
}

AdminRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

AdminRoutes.defaultProps = {
  user: null,
};
