import React from 'react'
import twitter from '../assets/twitter.svg'
import insta from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div class="footer-wrapper">
                <div className="footer-top">
                    <div className='footer-sections'>
                        <h2 id='footer-logo'>Handy &copy;</h2>
                        <br />
                        <h3>handymanservicechennai2022@gamil.com</h3>
                    </div>
                    <div className="footer-sections">
                        <h2 className="footer-title">EXPLORE</h2>
                        <h3>Home</h3>
                        <h3>Services</h3>
                        <h3>Become a Handy</h3>
                        <h3>Contact Us</h3>
                    </div>
                    <div className="footer-sections">
                        <h2 className="footer-title">VISIT</h2>
                        <h3>Chennai Institute Of Technology <br />Kundrathur <br />Chennai <br />602021</h3>
                    </div>
                    <div className="footer-sections">
                        <h2 className="footer-title">LEGAL</h2>
                        <h3>Tems and Conditions</h3>
                        <h3>Privacy Policy</h3>
                    </div>
                </div>
                <hr />
                <div className="footer-bottom">
                    <ul>
                        <li><a href="#" title="twitter"><img src={twitter} alt="twitter icon" /></a></li>
                        <li><a href="#" title="youtube"><img src={youtube} alt="youtube icon" /></a></li>
                        <li><a href="#" title="instagram"><img src={insta} alt="instagram icon" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer