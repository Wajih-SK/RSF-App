import React, { Component } from 'react';
import './headersection.css'
import { Link } from 'react-router-dom';

class HeaderSection extends Component {
    render() { 
        return (
            <div className="header-section">
                <h1>Move Your Business Forward</h1>
                <div class="dividor-container">
                    <div class="dividor"></div>
                </div>
                <p>Delivering tailored logistics solutions with precision and care—whether it is same-day service, dedicated routes, or international freight, we ensure every load is handled with unmatched efficiency and fair pricing.</p>

                <div className="btn-wrapper">
                    <Link to='/services' className="header-btn-link">
                        <button className="header-button">Learn More!</button>
                    </Link>
                    
                </div>
                
            </div>
         );
    }
}
 
export default HeaderSection;