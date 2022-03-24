import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="logo"></div>
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