import React from 'react'
import twitter from '../assets/twitter.svg'
import insta from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div class="footer-wrapper">
                <h1>Handy &copy;</h1>
                <ul>
                    <li><a href="#" title="twitter"><img src={twitter} alt="twitter icon" /></a></li>
                    <li><a href="#" title="youtube"><img src={youtube} alt="youtube icon" /></a></li>
                    <li><a href="#" title="instagram"><img src={insta} alt="instagram icon" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer