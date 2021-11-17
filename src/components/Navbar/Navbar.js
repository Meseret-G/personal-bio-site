import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { signOutUser, signInUser } from '../../api/auth';

export default function Navbar({ user }) {
  return (
    <div className="nav">
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
