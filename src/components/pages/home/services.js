import React, { Component } from 'react';
import AboutImage1 from '../../../assets/logo/RSFLOGO.png'

import './services.css'

class Services extends Component {
    render() { 
        return ( 
            <section className="services-section">
                <div className="services-header">
                    <h2>SERVICES</h2>
                    <hr className="divider-services"/>
                    <h1>We Move Your Future</h1>
                    <p>
                    Check out the extensive range of construction equipment we move, including excavators, bulldozers, cranes, and more.
                    </p>
                </div>
                <div className="services-cards">
                    <div className="service-card">
                    <img src={AboutImage1} alt="Excavators"/>
                    <h3>Excavators</h3>
                    <p>
                        Our industry-leading multi-axle equipment is designed to haul any excavator with ease across the state of CA and beyond.
                    </p>
                    <a href="#" className="learn-more">Learn More</a>
                    </div>
                    <div className="service-card">
                    <img src={AboutImage1} alt="Loaders"/>
                    <h3>Loaders</h3>
                    <p>
                        We are experts in construction equipment transport, and have hauled plenty of loaders of various sizes for our customers.
                    </p>
                    <a href="#" className="learn-more">Learn More</a>
                    </div>
                    <div className="service-card">
                    <img src={AboutImage1} alt="Rock Trucks"/>
                    <h3>Rock Trucks</h3>
                    <p>
                        We are your heavy haul partner for transporting rock trucks, also known as articulated dump trucks, anywhere in the US.
                    </p>
                    <a href="#" className="learn-more">Learn More</a>
                    </div>
                </div>
                </section>


        );
    }
}
 
export default Services;