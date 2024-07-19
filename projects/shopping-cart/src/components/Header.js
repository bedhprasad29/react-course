import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, handleLogout }) => {
    return (
        <header className="header">
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {isLoggedIn ? (
                        <>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </>
                    ) : (
                        <span className='guest-layout'>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </span>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
