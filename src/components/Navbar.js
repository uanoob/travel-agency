import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-md navbar-light bg-light mb-4">
      <a className="navbar-brand" href="/">
        Travel Agency
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallery">
              Gallery
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#signupModal"
        >
          Log In
        </button>
      </div>
    </nav>
    <div
      className="modal fade"
      id="signupModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="signupModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="signupModalTitle">
              Log In with:
            </h5>
          </div>
          <div className="modal-body">
            <div className="text-center">
              <form className="form-signin">
                <button type="button" className="btn btn-primary btn-lg btn-block">
                  <i className="fa fa-facebook pr-1" /> Facebook
                </button>
                <button type="button" className="btn btn-secondary btn-lg btn-block">
                  <i className="fa fa-twitter pr-1" /> Twitter
                </button>
                <button type="button" className="btn btn-primary btn-lg btn-block">
                  <i className="fa fa-google-plus pr-1" /> Google +
                </button>
                <button type="button" className="btn btn-secondary btn-lg btn-block">
                  <i className="fa fa-github pr-1" /> Github
                </button>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
