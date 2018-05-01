import React from 'react';

const Profile = (props) => {
  const user = props.user.login;
  return (
    <div className="col-lg-4 col-md-12 mb-3">
      <div className="view overlay z-depth-1-half">
        <div className="card">
          <div className="view overlay hm-white-slight">
            <img src="/images/avatar.png" className="img-fluid" alt="avatar" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Profile</h5>
            <div className="card-text">Name: {user.name}</div>
            <div className="card-text">Lastname: {user.lastname}</div>
            <div className="card-text">Email: {user.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
