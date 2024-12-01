import React, { Component } from 'react';
import '../../App.css';
import {menuItems} from './menuitems.js';
import './navbar.css';
import Logo from '../../assets/logo/RSFLOGO.png'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() { 
        return ( 
            <nav className="navbar-container">
                <div className = "logo-container">
                <img src={Logo} alt='logo' className="logo"/>
                </div>

                <div className="navbar-menu-btn" onClick={this.handleClick}>
                    <br/>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {menuItems.map((item, index) => {
                            return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )})}
                </ul>

                <div class="nav-button">
                    <a className="phone-number" href="tel:+13055555555">305-555-5555</a> 
                </div>

            </nav>
         );
    }
}
 
export default Navbar;