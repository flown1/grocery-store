import React from 'react';
import '../Styles/navbar/Navbar.css';

import Cart from './Cart.js';
import Login from './Login.js';

const Navbar = () => {
    return(
        <nav id="top-menu">
            <header className="App-header">
                <h1 className="App-title">Grocery Store</h1>
                <div className='side-box'>Do Grocery<br/>Online</div>
            </header>
            <div className="menu-tabs">
                <a href="#" className="top-menu-button"><h3>Shopping</h3></a>
                <a href="#" className="top-menu-button"><h3>About us</h3></a>
            </div>
            <div className="user-box">
                <Cart />
                <Login />
            </div>
        </nav>
    )
}
export default Navbar;