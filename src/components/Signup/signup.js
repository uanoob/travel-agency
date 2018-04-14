import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => (
  <div className="container">
    <section className="form-elegant">
      <div className="card">
        <div className="card-body mx-4">
          <div className="text-center">
            <h3 className="dark-grey-text mb-5">
              <strong>Sign Up</strong>
            </h3>
          </div>

          <div className="md-form">
            <input type="text" id="Form-username" className="form-control" />
            <label htmlFor="Form-username">Your username</label>
          </div>

          <div className="md-form">
            <input type="text" id="Form-email1" className="form-control" />
            <label htmlFor="Form-email1">Your email</label>
          </div>

          <div className="md-form">
            <input type="password" id="Form-pass1" className="form-control" />
            <label htmlFor="Form-pass1">Your password</label>
          </div>

          <div className="md-form">
            <input type="password" id="Form-pass-conf" className="form-control" />
            <label htmlFor="Form-pass-conf">Confirm password</label>
          </div>

          <div className="text-center mb-3">
            <button type="button" className="btn blue-gradient btn-block btn-rounded z-depth-1a">
              Sign Up
            </button>
          </div>
          <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
            {' '}
            or Connect with:
          </p>

          <div className="row my-3 d-flex justify-content-center">
            <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a">
              <i className="fa fa-facebook blue-text text-center" />
            </button>
            <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a">
              <i className="fa fa-twitter blue-text" />
            </button>
            <button type="button" className="btn btn-white btn-rounded z-depth-1a">
              <i className="fa fa-google-plus blue-text" />
            </button>
          </div>
        </div>

        <div className="modal-footer mx-5 pt-3 mb-1">
          <p className="font-small grey-text d-flex justify-content-end">
            Have an account?{' '}
            <Link to="/login" className="blue-text ml-1">
              {' '}
              Log In
            </Link>
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default SignUp;
