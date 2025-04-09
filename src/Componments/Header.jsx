import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo1.png';
    

const Header = () => {
    return (
        <header>
             <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                <div className="container d-flex justify-content-between align-items-center">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Logo" width="120" />
                    </Link>
                    <ul className="navbar-nav d-flex flex-row gap-3 mb-0 nav_edit">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Cart" className="nav-link">Cart</Link>
                        </li>
                    </ul>
                </div>
            </nav> 
        </header>
       
    );
};

export default Header;
