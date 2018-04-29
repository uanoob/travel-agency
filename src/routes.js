import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Auth from './hoc/auth';
import Home from './components/Home/home';
import Login from './containers/Admin/login';
import Register from './containers/Admin/register';
import Profile from './components/User/profile';
import Logout from './components/User/logout';
import ViewTour from './components/ViewTour/viewTour';
import Add from './containers/Admin/add';
import Edit from './containers/Admin/edit';
import Contact from './components/Contact/contact';
import About from './components/About/about';

const Routes = () => (
  <div>
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tours/:id" exact component={ViewTour} />
        <Route path="/add" exact component={Add} />
        <Route path="/edit/:id" exact component={Edit} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
      </Switch>
    </Layout>
  </div>
);

export default Routes;
