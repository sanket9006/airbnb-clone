import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);

    const handleclose = () => { setClick(false) };

    return (
        <nav className="navbar">
            <div className="navbar-container">

                <Link to="/" className="navbar-logo">
                    Bhor
                    <i style={{ color: 'black' }} className="fab fa-typo3"></i>
                </Link>

                <div className="menu-icon">
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} onClick={() => { setClick(!click) }} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item" onClick={handleclose}>
                        <Link to="/">Home</Link>
                    </li>

                    <li className="nav-item" onClick={handleclose}>
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li className="nav-item" onClick={handleclose}>
                        <Link to="/about">About</Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar
