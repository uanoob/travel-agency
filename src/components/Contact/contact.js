import React from 'react';

const Contact = () => (
  <div className="container">
    <section className="form-elegant">
      <div className="card">
        <div className="card-body mx-4">
          <div className="text-center">
            <h3 className="dark-grey-text mb-5">
              <strong>Contact Us</strong>
            </h3>
          </div>

          <div className="md-form">
            <input type="text" id="Form-name" className="form-control" />
            <label htmlFor="Form-name">Your name</label>
          </div>

          <div className="md-form">
            <input type="text" id="Form-email1" className="form-control" />
            <label htmlFor="Form-email1">Your email</label>
          </div>

          <div className="md-form">
            <input type="password" id="Form-subject" className="form-control" />
            <label htmlFor="Form-subject">Subject</label>
          </div>

          <div className="md-form">
            <textarea type="text" id="FormContactMessage" className="form-control" rows="3" />
            <label htmlFor="FormContactMessage">
              Your message
            </label>
          </div>

          <div className="text-center mb-3">
            <button type="button" className="btn blue-gradient btn-block btn-rounded z-depth-1a">
              Send
              <i className="fa fa-paper-plane-o ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
