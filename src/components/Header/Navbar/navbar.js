import React from 'react';
// import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark mdb-color darken-2 scrolling-navbar">
      <div className="container">
        <a className="navbar-brand" href="/">
          <strong>Travel Agency</strong>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Hot Tours
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About Us
              </a>
            </li>
          </ul>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Log In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
