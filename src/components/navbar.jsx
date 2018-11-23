import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        Vote
      </NavLink>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
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
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
