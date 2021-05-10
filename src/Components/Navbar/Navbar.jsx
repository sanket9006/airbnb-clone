import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <div>
            <h2>Navbar</h2>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Navbar
