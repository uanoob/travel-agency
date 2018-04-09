import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTours } from '../redux/actions';

import TourItem from '../widgetsUI/tour_item';

class HomeContainer extends Component {
  componentWillMount() {
    this.props.dispatch(getTours(2, 0, 'desc'));
  }

  loadmore = () => {
    const count = this.props.tours.list.length;
    this.props.dispatch(getTours(2, count, 'desc', this.props.tours.list));
  };

  renderItems = tours =>
    (tours.list ? tours.list.map(item => <TourItem {...item} key={item._id} />) : null);

  render() {
    console.log(this.props);

    return (
      <div>
        {this.renderItems(this.props.tours)}
        <div
          className="loadmore"
          role="button"
          tabIndex={0}
          onClick={this.loadmore}
          onKeyPress={this.loadmore}
        >
          Load More
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tours: state.tours,
});

export default connect(mapStateToProps)(HomeContainer);
