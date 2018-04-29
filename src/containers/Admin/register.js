import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { userRegister } from '../../redux/actions';

class Register extends PureComponent {
  state = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    error: '',
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.register === false) {
      this.setState({ error: 'Error, try again' });
    } else {
      this.setState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        error: '',
      });
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

  handleInputName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleInputLastname = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.setState({ error: '' });
    console.log('this.state: ', this.state);
    this.props.dispatch(userRegister({
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      lastname: this.state.lastname,
    }));
  };

  render() {
    return (
      <div className="container">
        <section className="form-elegant">
          <div className="card">
            <div className="card-body mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Register</strong>
                </h3>
              </div>
              <form onSubmit={this.submitForm}>
                <div className="md-form">
                  <input
                    type="text"
                    id="Form-name"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.handleInputName}
                  />
                  <label htmlFor="Form-name">Your name</label>
                </div>

                <div className="md-form">
                  <input
                    type="text"
                    id="Form-lastname"
                    className="form-control"
                    value={this.state.lastname}
                    onChange={this.handleInputLastname}
                  />
                  <label htmlFor="Form-lastname">Your lastname</label>
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

                <div className="md-form">
                  <input
                    type="password"
                    id="Form-pass"
                    className="form-control"
                    value={this.state.password}
                    onChange={this.handleInputPassword}
                  />
                  <label htmlFor="Form-pass">Your password</label>
                </div>

                {/* <div className="md-form">
                  <input type="password" id="Form-pass-conf" className="form-control" />
                  <label htmlFor="Form-pass-conf">Confirm password</label>
                </div> */}

                <div className="text-center mb-3">
                  <button
                    type="submit"
                    className="btn blue-gradient btn-block btn-rounded z-depth-1a"
                  >
                    Register
                  </button>
                </div>
                <div className="error">{this.state.error}</div>
              </form>
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
  }
}
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Register);
