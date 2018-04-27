import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MDSpinner from 'react-md-spinner';

import { getTour } from '../../redux/actions';

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
            <img src={tours.tour.image.path} className="img-fluid" alt="Sample post" />
          </div>

          <div className="news-data">
            <p>
              <strong>${tours.tour.price}</strong>
            </p>
          </div>
          <p> {tours.tour.description}</p>

          <hr />

          <Link to={`/edit/${tours.tour._id}`}>
            <button className="btn warning-color btn-rounded z-depth-1a">Edit tour</button>
          </Link>
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
