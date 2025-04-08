import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="">
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="header">
                        <div className="logo">
                            <img src={require('../img/logo1.png')} alt="" />
                        </div>
                        <div className="navmenu">
                            <li> <Link to="/">Home</Link></li>
                            {/* <li> <Link to="/ProductDetails">ProductDetails</Link></li> */}
                            <li> <Link to="/Cart">Cart</Link></li>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
