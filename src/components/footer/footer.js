import React, { Component } from 'react';
import AboutImage1 from '../../assets/logo/RSFLOGO.png'

import './footer.css'

class Footer extends Component {
    render() { 
        return ( 
            <footer class="footer">
            <div className="footer-container">
            {/* <!-- Logo and About Section --> */}
            <div className="footer-about">
                <img src={AboutImage1} alt="Marco Transport Logo" className="footer-logo"/>
                <p>ROCK STAR FALCON TRANSPORT</p>
                <div className="footer-socials">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>

            {/* <!-- Quick Links --> */}
            <div className="footer-links">
                <h3>Quick Links</h3>
                <hr className="divider"/>
                <ul>
                <li><a href="#">About Us</a></li>
         
                <li><a href="#">Services</a></li>
               
                <li><a href="#">Contact Us</a></li>
                </ul>
            </div>

            {/* <!-- Contact Info --> */}
            <div className="footer-contact">
                <h3>Contact Us</h3>
                <hr className="divider"/>
                <p>salah's address?<br/>Ontario, CA</p>
                <p><strong>Email:</strong> <a href="mailto:meowmeow@gmail.om">info@marcotrucking.com</a></p>
                <p><strong>Phone:</strong> 1-800-xxx-xxx</p>
            </div>

            </div>

            {/* <!-- Footer Bottom --> */}
            <div className="footer-bottom">
            <p>© Copyright 2024 | Site by Wajih Salam Khan</p>
            <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
            </div>
            </footer>



        );
    }
}
 
export default Footer;