import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Home from './components/Home/home';
import Login from './components/Login/login';
import SignUp from './components/Signup/signup';
import ContactUs from './components/Contact/contact';
import AboutUs from './components/About/about';
import ViewTour from './components/ViewTour/viewTour';
import AddTour from './containers/Admin/addTour';


const Routes = () => (
  <div>
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tours/:id" exact component={ViewTour} />
        <Route path="/add" exact component={AddTour} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/contactus" exact component={ContactUs} />
        <Route path="/aboutus" exact component={AboutUs} />
      </Switch>
    </Layout>
  </div>
);

export default Routes;
