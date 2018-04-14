import React from 'react';

const About = () => (
  <div>
    <section className="pb-3 text-center">
      <h1 className="font-weight-bold h1 py-5">Testimonials</h1>
      <p className="grey-text pb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure
          provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a
          pariatur accusamus veniam.
      </p>

      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4">
          <div className="card testimonial-card">
            <div className="card-up info-color" />

            <div className="avatar mx-auto white">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                className="rounded-circle img-fluid"
                alt="Avatar"
              />
            </div>

            <div className="card-body">
              <h4 className="mt-1">
                <strong>John Doe</strong>
              </h4>
              <hr />
              <p className="dark-grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-12 mb-4">
          <div className="card testimonial-card">
            <div className="card-up blue-gradient" />

            <div className="avatar mx-auto white">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                className="rounded-circle img-fluid"
                alt="Avatar"
              />
            </div>

            <div className="card-body">
              <h4 className="mt-1">
                <strong>Anna Aston</strong>
              </h4>
              <hr />
              <p className="dark-grey-text">
                  Neque cupiditate assumenda in maiores repudiandae mollitia architecto.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-12 mb-4">
          <div className="card testimonial-card">
            <div className="card-up indigo" />

            <div className="avatar mx-auto white">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                className="rounded-circle img-fluid"
                alt="Avatar"
              />
            </div>

            <div className="card-body">
              <h4 className="mt-1">
                <strong>Maria Kate</strong>
              </h4>
              <hr />
              <p className="dark-grey-text">
                  Delectus impedit saepe officiis ab aliquam repellat, rem totam unde ducimus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
