import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import Projects from '../views/Projects';
import TechnologiesPage from '../views/Technologies';
import Contact from '../views/Contact';
import AboutPage from '../views/About';

export default function PublicRoutes() {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/technologies" component={TechnologiesPage} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
}
