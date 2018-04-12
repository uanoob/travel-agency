import React from 'react';

const URL = process.env.REACT_APP_API_HOST;

const TourItem = item => (
  // http://localhost:5000/images/boat.jpg

  <div className="col-lg-4 col-md-12 mb-3">
    <div className="view overlay z-depth-1-half">
      <div className="card">
        <div className="view overlay hm-white-slight">
          <img src={`${URL}/images/${item.image}`} className="img-fluid" alt="" />
          <a href="/" target="_blank" rel="noopener noreferrer">
            <div className="mask rgba-white-light" />
          </a>
        </div>

        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <div className="card-text">{item.adress}</div>
          <div className="card-text"> {item.hotel}</div>
          <div className="card-text">Price: ${item.price}</div>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-md mdb-color darken-2"
          >
            Detail
            <i className="fa fa-play ml-2" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default TourItem;
