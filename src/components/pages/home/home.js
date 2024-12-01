import React, { Component } from 'react';
import '../../../App.css'
import HeaderSection from './headersection';
import Services from './services';
import AboutSection from './aboutsection';
import Message from './message';

class Home extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <HeaderSection/>
                
                <AboutSection/>
                <Services/>
                <Message/>
            </React.Fragment>
         );
    }
}
 
export default Home;