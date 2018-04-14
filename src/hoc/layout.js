import React from 'react';

import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';

const Layout = props => (
  <div>
    <Header />
    <div className="wrapper">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
