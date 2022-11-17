import React from "react";
import { Link } from "react-router-dom";

const NavBarCustomer = () => {
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
              <Link to="/logout">
                <span className="glyphicon glyphicon-user"></span>Logout.!
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBarCustomer;
