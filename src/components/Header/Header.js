import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
               <img src={logo} alt="" />
            </div>
            <nav> 
                <a href="/shop">Shop</a> 
                <a href="/review">Review</a> 
                <a href="/inventory">Manage Inventory</a>  
            </nav>
        </div>
    );
};

export default Header;