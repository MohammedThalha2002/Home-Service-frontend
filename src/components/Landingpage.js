import React from 'react'
import './Landingpage.css'
import video from '../assets/landing-page-video.mp4'

function Landingpage() {
    return (
        <div className='landingPage'>
            <div className='body'>
                <video autoPlay loop muted id='myVideo'>
                    <source
                        src={video}
                        type="video/mp4"
                    />
                </video>
                <div className="bg-overlay"></div>
                <div className="explore-btn">
                    <a href="/home"><button id='explore-btn'>Explore Services</button></a>
                </div>
            </div>
        </div>
    )
}

export default Landingpage