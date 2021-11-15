import React from 'react';
import { Routes, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

const index = ({ user }) => (
  <div>
    <Switch>
      <Routes user={user} />
    </Switch>
  </div>
);

index.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};
index.defaultProps = { user: null };

export default index;
