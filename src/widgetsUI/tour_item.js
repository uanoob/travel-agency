import React from 'react';
import { Link } from 'react-router-dom';

const TourItem = item => (
  <div className="col-lg-4 col-md-12 mb-3">
    <div className="view overlay z-depth-1-half">
      <div className="card">
        <div className="view overlay hm-white-slight">
          <img src={item.image.path} className="img-fluid" alt="" />
          <Link to={`/tours/${item._id}`}>
            <div className="mask rgba-white-light" />
          </Link>
        </div>

        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <div className="card-text">Price: ${item.price}</div>
          <Link to={`/tours/${item._id}`} className="btn btn-primary btn-md mdb-color darken-2">
            Detail
            <i className="fa fa-play ml-2" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default TourItem;
