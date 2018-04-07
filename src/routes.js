import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Home from './components/Home/home';
import TourItem from './widgetsUI/tour_item';


const Routes = () => (
  <div>
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tours/:id" exact component={TourItem} />
      </Switch>
    </Layout>
  </div>
);

export default Routes;
