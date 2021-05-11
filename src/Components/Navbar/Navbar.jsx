import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">
                <i style={{ color: 'black' }} className="fas fa-typo3"></i>
            </Link>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Navbar
