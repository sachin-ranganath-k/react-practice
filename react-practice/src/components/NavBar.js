import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Free Learning Zone
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/courses"> Courses</Link>
            </li>
            <li>
            <Link to="/ContactUs">Contact Us</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
            <Link to="/signin"><span className="glyphicon glyphicon-user"></span>Sign In</Link>
            </li>
            <li>
            <Link to="/signup"><span className="glyphicon glyphicon-user"></span>Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
