import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Home from './components/Home/home';
import TourItem from './widgetsUI/tour_item';
import Login from './components/Login/login';
import SignUp from './components/Signup/signup';


const Routes = () => (
  <div>
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tours/:id" exact component={TourItem} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </Layout>
  </div>
);

export default Routes;
