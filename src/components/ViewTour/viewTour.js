import React, { Component } from 'react';
import { connect } from 'react-redux';
import MDSpinner from 'react-md-spinner';

import { getTour } from '../../redux/actions';
import { BASE_URL } from '../../config';

class ViewTour extends Component {
  componentWillMount() {
    this.props.dispatch(getTour(this.props.match.params.id));
  }

  renderTours = tours =>
    (tours.tour ? (
      <section className="wow fadeIn">
        <h2 className="h1 text-center my-5 font-weight-bold">{tours.tour.title}</h2>

        <div className="col-lg-12 col-md-12">
          <div className="view overlay rounded z-depth-1-half mb-3">
            <img
              src={`${BASE_URL}/images/${tours.tour.image}`}
              className="img-fluid"
              alt="Sample post"
            />
          </div>

          <div className="news-data">
            <div className="light-blue-text">
              <h6>
                <i className="fa fa-plane" />
                <strong>{tours.tour.address}</strong>
              </h6>
            </div>
            <p>
              <strong>${tours.tour.price}</strong>
            </p>
          </div>
          <h3>
            <strong>{tours.tour.hotel}</strong>
          </h3>
          <p> {tours.tour.description}</p>

          <hr />

          <div className="row">
            <div className="col-md-9">
              <p className="dark-grey-text">
                <strong>Comments:</strong>
              </p>
              {tours.tour.reviews}
            </div>
          </div>
        </div>
      </section>
    ) : (
      <div className="col-lg-12 col-md-12">
        <MDSpinner size={100} singleColor="#1C2331" />
      </div>
    ));

  render() {
    const tours = this.props.tours;
    return <div>{this.renderTours(tours)}</div>;
  }
}

const mapStateToProps = state => ({
  tours: state.tours,
});

export default connect(mapStateToProps)(ViewTour);
