import React from 'react';

const Home = () => (
  <main role="main" className="container">
    <div className="my-3 p-3 bg-white rounded box-shadow">
      <h6 className="border-bottom border-gray pb-2 mb-0">Recent updates</h6>
      <div className="media text-muted pt-3">
        <img
          data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1"
          alt=""
          className="mr-2 rounded"
        />
        <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <strong className="d-block text-gray-dark">@username</strong>
          Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
          tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        </p>
      </div>
      <div className="media text-muted pt-3">
        <img
          data-src="holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1"
          alt=""
          className="mr-2 rounded"
        />
        <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <strong className="d-block text-gray-dark">@username</strong>
          Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
          tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        </p>
      </div>
      <div className="media text-muted pt-3">
        <img
          data-src="holder.js/32x32?theme=thumb&bg=6f42c1&fg=6f42c1&size=1"
          alt=""
          className="mr-2 rounded"
        />
        <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <strong className="d-block text-gray-dark">@username</strong>
          Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
          tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        </p>
      </div>
      <small className="d-block text-right mt-3">
        <a href="/">All updates</a>
      </small>
    </div>

    <div className="my-3 p-3 bg-white rounded box-shadow">
      <h6 className="border-bottom border-gray pb-2 mb-0">Suggestions</h6>
      <div className="media text-muted pt-3">
        <img
          data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1"
          alt=""
          className="mr-2 rounded"
        />
        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <div className="d-flex justify-content-between align-items-center w-100">
            <strong className="text-gray-dark">Full Name</strong>
            <a href="/">Follow</a>
          </div>
          <span className="d-block">@username</span>
        </div>
      </div>
      <div className="media text-muted pt-3">
        <img
          data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1"
          alt=""
          className="mr-2 rounded"
        />
        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <div className="d-flex justify-content-between align-items-center w-100">
            <strong className="text-gray-dark">Full Name</strong>
            <a href="/">Follow</a>
          </div>
          <span className="d-block">@username</span>
        </div>
      </div>
      <div className="media text-muted pt-3">
        <img
          data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1"
          alt=""
          className="mr-2 rounded"
        />
        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <div className="d-flex justify-content-between align-items-center w-100">
            <strong className="text-gray-dark">Full Name</strong>
            <a href="/">Follow</a>
          </div>
          <span className="d-block">@username</span>
        </div>
      </div>
      <small className="d-block text-right mt-3">
        <a href="/">All suggestions</a>
      </small>
    </div>
  </main>
);

export default Home;
