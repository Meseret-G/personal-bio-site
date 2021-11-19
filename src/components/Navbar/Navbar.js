import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import '../../styles/globals/index.scss';

export default function Navbar() {
  return (
    <div className="nav">
      <NavItem>
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
    </div>
  );
}
