import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              My Bank
            </a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/customerLogin">
                <span className="glyphicon glyphicon-user"></span>Sign In
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="glyphicon glyphicon-user"></span>Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
