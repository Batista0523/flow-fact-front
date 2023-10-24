import React from "react";
import { Link } from "react-router-dom";
 import "./NavBar.css"; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <div >
        <Link to="/" className="navbar-brand">
          Fact Flow
        </Link>
        <Link to="/create-resource">
          <button className="btn btn-primary custom-button">Create New Resource</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
