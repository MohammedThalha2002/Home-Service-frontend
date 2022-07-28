import React from 'react'
import './Navbar.css'

function NavBar() {
    return (
        <div className='nav-head'>
            <nav className='navbar'>
                <div className="logo">
                    <a href="/"><h1>HANDY</h1></a>
                </div>
                <ul className='navbar-links'>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/become-a-handy">Become a Handy</a></li>
                </ul>
            </nav>
            <div id="services-hover-box">

            </div>
        </div>
    )
}

export default NavBar