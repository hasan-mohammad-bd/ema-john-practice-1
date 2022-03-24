import React from 'react';
import './Header.css'
import logo from "../../images/Logo.svg"
//mistake 1: importing the logo and how to use it.
const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav>
                <ul>
                    <li><a href="">Order</a></li>
                    <li><a href="">Order Review</a></li>
                    <li><a href="">Manage Inventory</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;