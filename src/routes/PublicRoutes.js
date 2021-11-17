import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Projects from '../views/Projects';
import About from '../views/About';
import Technologies from '../views/Technologies';
import Contact from '../views/Contact';

export default function PublicRoutes() {
  return (
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/technologies" component={Technologies} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
}
