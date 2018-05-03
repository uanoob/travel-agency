import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Auth from './hoc/auth';
import Home from './components/Home/home';
import Login from './containers/Admin/login';
import Register from './containers/Admin/register';
import Profile from './components/User/profile';
import Logout from './components/User/logout';
import ViewTour from './containers/ViewTour/viewTour';
import Add from './containers/Admin/add';
import Edit from './containers/Admin/edit';
import Contact from './components/Contact/contact';
import About from './components/About/about';

const Routes = () => (
  <div>
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home, null)} />
        <Route path="/tours/:id" exact component={Auth(ViewTour, null)} />
        <Route path="/add" exact component={Auth(Add, true)} />
        <Route path="/edit/:id" exact component={Auth(Edit, true)} />
        <Route path="/register" exact component={Auth(Register, null)} />
        <Route path="/login" exact component={Auth(Login, false)} />
        <Route path="/profile" exact component={Auth(Profile, true)} />
        <Route path="/logout" exact component={Auth(Logout, true)} />
        <Route path="/contact" exact component={Auth(Contact, null)} />
        <Route path="/about" exact component={Auth(About, null)} />
      </Switch>
    </Layout>
  </div>
);

export default Routes;
