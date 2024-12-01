import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';

// import Contact from './components/pages/contact/Contact';
import Safety from './components/pages/safety/safety';
import Home from './components/pages/home/home';
import AboutUs from './components/pages/aboutus/aboutus';
// import Media from './components/pages/media/Media';

import Footer from './components/footer/footer';


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/safety' component={Safety} />
          <Route path='/about-us' component={AboutUs} />
          {/* <Route path='/contact-us' component={Contact} /> */}
        </Switch>
        <Footer/>
      </Router>
    )
  }
}

export default App;
