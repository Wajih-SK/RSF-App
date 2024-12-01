import React, { Component } from 'react';
// import AboutSectionItem from './AboutSectionItem';
import AboutImage1 from '../../../assets/logo/RSFLOGO.png'
// import AboutImage3 from '../../../assets/images/about-image-3.png'
// import { AboutSectionItemText } from './AboutSectionItemText';
import './aboutsection.css'

class AboutSection extends Component {
    render() { 
        return ( 
            <section className="about-section">
                <div className="about-container">
                    <div className="about-content">
                        <h2>About</h2>
                        <h1>Rock Star Falcon Transport</h1>
                        <hr className="divider"/>
                        <p>
                        Marco Transport, Inc. is a family-owned and operated Lowbed Service with over
                        30 years of experience transporting construction equipment and oversize loads
                        throughout the Western United States. Located centrally in the Los Angeles/Orange
                        County Basin, as well as having satellite offices in the Inland Empire, we offer
                        competitive prices and take pride in on-time deliveries.
                        </p>
                        <p>
                        Our team is experienced in handling multi-axle, specialized project solutions for
                        all your heavy transport needs. From oversized machinery to specialized equipment,
                        we’ve got you covered.
                        </p>
                        <a href="#" className="read-more-btn">Read More</a>
                    </div>
                    <div className="about-images">
                        <img src={AboutImage1} classNameName="image-large" alt="Truck Image 1"/>
                    </div>
                </div>
                
            </section>


        );
    }
}
 
export default AboutSection;