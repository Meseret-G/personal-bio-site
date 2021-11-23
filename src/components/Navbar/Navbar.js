import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink } from 'reactstrap';
import '../../styles/globals/index.scss';
import { signInUser, signOutUser } from '../../api/auth';

export default function Navbar({ user }) {
  return (
    <div className="nav">
      <NavItem className="navitem">
        <NavLink href="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/about">About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/projects">Projects</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/technologies">Technologies</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/contact">Contact</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/email">Email Me</NavLink>
      </NavItem>
      {user ? (
        <button onClick={signOutUser} className="btn btn-primary" type="button">
          Sign Out
        </button>
      ) : (
        <button onClick={signInUser} className="btn btn-primary" type="button">
          Sign In
        </button>
      )}
    </div>
  );
}

Navbar.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};
Navbar.defaultProps = {
  user: null,
};
