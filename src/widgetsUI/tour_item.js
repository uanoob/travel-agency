import React from 'react';

const URL = process.env.REACT_APP_API_HOST;

const TourItem = item => (
  // http://localhost:5000/images/boat.jpg

  <div className="col-md-4">
    <div className="card mb-4 box-shadow">
      <img className="card-img-top" src={`${URL}/images/${item.image}`} alt="Card cap" />
      <div className="card-body">
        <p className="card-text">{item.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Edit
            </button>
          </div>
          <small className="text-muted">{item.title}</small>
        </div>
      </div>
    </div>
  </div>
);

export default TourItem;
