import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getTour, updateTour, deleteTour, clearTour } from '../../redux/actions';

class EditTour extends Component {
  state = {
    formdata: {
      _id: this.props.match.params.id,
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

  componentWillMount() {
    this.props.dispatch(getTour(this.props.match.params.id));
  }

  componentWillReceiveProps(nextProps) {
    const tour = nextProps.tours.tour;
    this.setState({
      formdata: {
        _id: tour._id,
        title: tour.title,
        hotel: tour.hotel,
        address: tour.address,
        rating: tour.rating,
        image: tour.image,
        price: tour.price,
        reviews: tour.reviews,
        description: tour.description,
      },
    });
  }

  componentWillUnmount() {
    this.props.dispatch(clearTour());
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
    this.props.dispatch(updateTour(this.state.formdata));
  };

  deleteTour = () => {
    this.props.dispatch(deleteTour(this.props.match.params.id));
  };

  redirectUser = () => {
    setTimeout(() => {
      this.props.history.push('/');
    }, 2000);
  };

  render() {
    const tours = this.props.tours;
    return (
      <div>
        <div className="container">
          <section className="form-elegant">
            <div className="card">
              <div className="card-body mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5">
                    <strong>Edit Tour</strong>
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
                      Save Tour
                      <i className="fa fa-paper-plane-o ml-2" />
                    </button>
                    <button
                      className="btn danger-color btn-rounded z-depth-1a"
                      onClick={this.deleteTour}
                      onKeyPress={this.deleteTour}
                    >
                      Delete tour
                    </button>
                  </div>
                </form>

                {tours.updatetour ? (
                  <div className="text-center mb-3">
                    Tour updated{' '}
                    <Link to={`/tours/${tours.tour._id}`}>
                      <div className="text-center mb-3">
                        <button className="btn mdb-color darken-2 btn-rounded z-depth-1a">
                          See tour
                        </button>
                      </div>
                    </Link>
                  </div>
                ) : null}
                {tours.postdeleted ? (
                  <div className="text-center mb-3 text-danger">
                    Tour deleted
                    {this.redirectUser()}
                  </div>
                ) : null}
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

export default connect(mapStateToProps)(EditTour);
