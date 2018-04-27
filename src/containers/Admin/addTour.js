import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addTour, clearNewTour } from '../../redux/actions';

class AddTour extends Component {
  state = {
    formdata: {
      title: '',
      image: {
        key: '',
        path: '',
      },
      price: '',
      description: '',
    },
    selectedFile: null,
    previewFile: null,
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
    const formdata = new FormData();
    if (this.state.selectedFile) {
      formdata.append('file', this.state.selectedFile);
    }
    formdata.append('title', this.state.formdata.title);
    formdata.append('price', this.state.formdata.price);
    formdata.append('description', this.state.formdata.description);
    this.props.dispatch(addTour(formdata));
  };

  showNewTour = tour =>
    (tour.post ? (
      <button className="btn blue-gradient btn-block btn-rounded z-depth-1a">
        Cool! <Link to={`/tours/${tour.tourId}`}>New tour is Here!</Link>
      </button>
    ) : null);

  fileSelectedHandler = (event) => {
    if (event.target.files[0]) {
      this.filePreviewHandler(event.target.files[0]);
      const newState = { ...this.state };
      newState.selectedFile = event.target.files[0];
      this.setState({
        ...newState,
      });
    }
  };

  filePreviewHandler = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const newState = { ...this.state };
        newState.previewFile = reader.result;
        this.setState({
          ...newState,
        });
      };
    }
  };

  renderImageHandler = () => (
    <div className="col-lg-12 col-md-12">
      <div className="view overlay rounded z-depth-1-half mb-3">
        <img src={this.state.previewFile} className="img-fluid" alt="Sample post" />
      </div>
    </div>
  );

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
                      type="number"
                      id="form-price"
                      className="form-control"
                      placeholder="Price"
                      value={this.state.formdata.price}
                      onChange={event => this.handleInput(event, 'price')}
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

                  {this.state.previewFile ? this.renderImageHandler() : null}

                  <div className="md-form">
                    <div className="">
                      <div className="btn btn-mdb-color btn-block btn-rounded z-depth-1a">
                        <input
                          type="file"
                          id="form-image"
                          onChange={event => this.fileSelectedHandler(event)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-center mb-3">
                    <button type="submit" className="btn success-color btn-rounded z-depth-1a">
                      Add Tour
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
