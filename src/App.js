import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="">
        <BrowserRouter>
          <div className="">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/gallery" component={Gallery} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
