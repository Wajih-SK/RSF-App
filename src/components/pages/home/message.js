import React, { Component } from 'react';
import AboutImage1 from '../../../assets/logo/RSFLOGO.png'

import './message.css'

class Message extends Component {
    render() { 
        return ( 
            
            <section className="message-section">
            <div className="message-header">
                <h2>Message from Our Team</h2>
                <hr className="divider"/>
            </div>
            <div className="message-content">
                <p>
                We have gathered and combined personnel with over seventy-five years of experience
                starting from the ground up. Our team has worked their way up mastering every level of
                operations along the way.
                </p>
                <p className="fade-text">
                In addition to many of combined experience, we never stop learning and we continue to
                master new approaches and techniques. Our team works together to ensure that our
                company is regularly developing customer care procedures and a strong foundation for
                customer service...
                </p>
                <a href="/about-us" className="read-more-btn">Read More »</a>
            </div>
            </section>


        );
    }
}
 
export default Message;