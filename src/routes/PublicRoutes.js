import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Projects from '../views/Projects';
import TechnologiesPage from '../views/Technologies';
import Contact from '../views/Contact';
import AboutPage from '../views/About';
import Email from '../views/Email';
// import HomePage from '../views/Home';

export default function PublicRoutes({ user }) {
  return (
    <Switch>
      {/* <Route exact path="/" component={HomePage} /> */}
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/technologies" component={TechnologiesPage} />
      <Route
        // exact
        path="/projects"
        component={() => <Projects user={user} />}
      />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/email" component={Email} />
    </Switch>
  );
}
PublicRoutes.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    fullName: PropTypes.string,
    profilePic: PropTypes.string,
    isAdmin: PropTypes.bool,
  }),
};

PublicRoutes.defaultProps = {
  user: null,
};
