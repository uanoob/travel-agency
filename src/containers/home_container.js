import React, { Component } from 'react';
import { connect } from 'react-redux';

import TourItem from '../widgetsUI/tour_item';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <TourItem />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tours: state.tours,
});

export default connect(mapStateToProps)(HomeContainer);
