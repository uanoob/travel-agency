import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addTour, clearNewTour } from '../../redux/actions';

class AddTour extends Component {
  state = {
    formdata: {
      title: '',
      hotel: '',
      address: '',
      rating: '',
      image: '',
      price: '',
      reviews: '',
      description: '',
    },
  };

  componentWillUnmount() {
    this.props.dispatch(clearNewTour());
  }

  handleInput = (event, name) => {
    const newFormData = { ...this.state.formdata };
    newFormData[name] = event.target.value;
    this.setState({
      formdata: newFormData,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(addTour({
      ...this.state.formdata,
    }));
  };

  showNewTour = tour =>
    (tour.post ? (
      <button className="btn blue-gradient btn-block btn-rounded z-depth-1a">
        Cool! <Link to={`/tours/${tour.tourId}`}>New tour is Here!</Link>
      </button>
    ) : null);

  render() {
    return (
      <div>
        <div className="container">
          <section className="form-elegant">
            <div className="card">
              <div className="card-body mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5">
                    <strong>Add Tour</strong>
                  </h3>
                </div>

                <form onSubmit={this.submitForm}>
                  <div className="md-form">
                    <input
                      type="text"
                      id="form-title"
                      className="form-control"
                      placeholder="Title"
                      value={this.state.formdata.title}
                      onChange={event => this.handleInput(event, 'title')}
                    />
                  </div>
                  <div className="md-form">
                    <input
                      type="text"
                      id="form-hotel"
                      className="form-control"
                      placeholder="Hotel"
                      value={this.state.formdata.hotel}
                      onChange={event => this.handleInput(event, 'hotel')}
                    />
                  </div>
                  <div className="md-form">
                    <input
                      type="text"
                      id="form-address"
                      className="form-control"
                      placeholder="Address"
                      value={this.state.formdata.address}
                      onChange={event => this.handleInput(event, 'address')}
                    />
                  </div>
                  <div className="md-form">
                    <input
                      type="number"
                      id="form-rating"
                      className="form-control"
                      placeholder="Rating"
                      value={this.state.formdata.rating}
                      onChange={event => this.handleInput(event, 'rating')}
                    />
                  </div>
                  <div className="md-form">
                    <input
                      type="text"
                      id="form-image"
                      className="form-control"
                      placeholder="Image"
                      value={this.state.formdata.image}
                      onChange={event => this.handleInput(event, 'image')}
                    />
                  </div>
                  <div className="md-form">
                    <input
                      type="number"
                      id="form-price"
                      className="form-control"
                      placeholder="Price"
                      value={this.state.formdata.price}
                      onChange={event => this.handleInput(event, 'price')}
                    />
                  </div>
                  <div className="md-form">
                    <input
                      type="text"
                      id="form-review"
                      className="form-control"
                      placeholder="Reviews"
                      value={this.state.formdata.reviews}
                      onChange={event => this.handleInput(event, 'reviews')}
                    />
                  </div>

                  <div className="md-form">
                    <textarea
                      type="text"
                      id="form-description"
                      className="form-control"
                      placeholder="Description"
                      rows="3"
                      value={this.state.formdata.description}
                      onChange={event => this.handleInput(event, 'description')}
                    />
                  </div>
                  <div className="text-center mb-3">
                    <button type="submit" className="btn success-color btn-rounded z-depth-1a">
                      Add Tour
                      <i className="fa fa-paper-plane-o ml-2" />
                    </button>
                  </div>
                  {this.props.tours.newtour ? this.showNewTour(this.props.tours.newtour) : null}
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tours: state.tours,
});

export default connect(mapStateToProps)(AddTour);
