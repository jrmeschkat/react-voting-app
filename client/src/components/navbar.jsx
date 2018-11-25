import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import { NavLink } from 'react-router-dom';

const VotingNavBar = () => {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="/">Vote</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            className="nav-item nav-link"
            activeClassName="active"
            to="/"
            exact
          >
            Home
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            activeClassName="active"
            to="/create"
            exact
          >
            Create
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            activeClassName="active"
            to="/result"
            exact
          >
            Result
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default VotingNavBar;
