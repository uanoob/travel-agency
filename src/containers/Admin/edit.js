import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getTour, updateTour, deleteTour, clearTour } from '../../redux/actions';

class EditTour extends Component {
  state = {
    formdata: {
      _id: this.props.match.params.id,
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

  componentWillMount() {
    this.props.dispatch(getTour(this.props.match.params.id));
  }

  componentWillReceiveProps(nextProps) {
    const tour = nextProps.tours.tour;
    this.setState({
      formdata: {
        _id: tour._id,
        title: tour.title,
        image: tour.image,
        price: tour.price,
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

    const formdata = new FormData();
    const id = this.state.formdata._id;
    if (this.state.selectedFile) {
      formdata.append('file', this.state.selectedFile);
    }
    formdata.append('title', this.state.formdata.title);
    formdata.append('price', this.state.formdata.price);
    formdata.append('description', this.state.formdata.description);
    this.props.dispatch(updateTour(id, formdata));
  };

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

  deleteTour = () => {
    this.props.dispatch(deleteTour(this.props.match.params.id));
  };

  redirectUser = () => {
    setTimeout(() => {
      this.props.history.push('/');
    }, 2000);
  };

  renderImageHandler = previewFile =>
    (!previewFile ? (
      <div className="col-lg-12 col-md-12">
        <div className="view overlay rounded z-depth-1-half mb-3">
          <img src={this.state.formdata.image.path} className="img-fluid" alt="Sample post" />
        </div>
      </div>
    ) : (
      <div className="col-lg-12 col-md-12">
        <div className="view overlay rounded z-depth-1-half mb-3">
          <img src={this.state.previewFile} className="img-fluid" alt="Sample post" />
        </div>
      </div>
    ));

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

                  {this.state.formdata.image.path
                    ? this.renderImageHandler(this.state.previewFile)
                    : null}

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
                      Save Tour
                      <i className="fa fa-paper-plane-o ml-2" />
                    </button>
                  </div>
                </form>

                <div className="text-center mb-3">
                  <button
                    className="btn danger-color btn-rounded z-depth-1a"
                    onClick={this.deleteTour}
                  >
                    Delete tour
                  </button>
                </div>

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
                {tours.tourdeleted ? (
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
