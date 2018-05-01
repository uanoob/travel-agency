import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loginUser } from '../../redux/actions';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    success: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.login.isAuth) {
      this.props.history.push('/profile');
    }
  }

  handleInputEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleInputPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(loginUser(this.state));
  };

  render() {
    const user = this.props.user;
    return (
      <div className="container">
        <form className="form-elegant" onSubmit={this.submitForm}>
          <div className="card">
            <div className="card-body mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Log In</strong>
                </h3>
              </div>

              <div className="md-form">
                <input
                  type="email"
                  id="Form-email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleInputEmail}
                />
                <label htmlFor="Form-email">Your email</label>
              </div>

              <div className="md-form pb-3">
                <input
                  type="password"
                  id="Form-password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.handleInputPassword}
                />
                <label htmlFor="Form-password">Your password</label>
                <p className="font-small blue-text d-flex justify-content-end">
                  Forgot{' '}
                  <a href="/" className="blue-text ml-1">
                    {' '}
                    Password?
                  </a>
                </p>
              </div>

              <div className="text-center mb-3">
                <button
                  type="submit"
                  className="btn blue-gradient btn-block btn-rounded z-depth-1a"
                >
                  Log In
                </button>
                <div className="error">{user.login ? <div>{user.login.message}</div> : null}</div>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                {' '}
                or Log In with:
              </p>

              <div className="row my-3 d-flex justify-content-center">
                <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a">
                  <i className="fa fa-facebook blue-text text-center" />
                </button>
                <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a">
                  <i className="fa fa-twitter blue-text" />
                </button>
                <button
                  onClick={() => this.handleWithGoogle()}
                  type="button"
                  className="btn btn-white btn-rounded z-depth-1a"
                >
                  <i className="fa fa-google-plus blue-text" />
                </button>
              </div>
            </div>

            <div className="modal-footer mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?{' '}
                <Link to="/register" className="blue-text ml-1">
                  {' '}
                  Register
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(Login);
