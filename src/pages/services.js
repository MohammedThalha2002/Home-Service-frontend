import React from 'react'
import './Services.css'
import cleaner from '../assets/cleaning.png'
import furnitureAssembly from '../assets/furnitureAssembly.png'
import HandymanServices from '../assets/handyman.png'
import OfficeCleaning from '../assets/office-cleaning.png'
import TVMounting from '../assets/tv-renovations.png'
import painter from '../assets/painter.png'
import vacationalCleaning from '../assets/vacational-cleaning.png'
import PcBuild from '../assets/pc-build.png'
import plumber from '../assets/plumber.png'
import toilet from '../assets/toilet.png'
import faucet from '../assets/faucet.png'
import electricalService from '../assets/electrical-service.png'
import outlet from '../assets/outlet.png'
import bulb from '../assets/bulb.png'
import interiorPainting from '../assets/interior-painting.png'
import bedroomPainting from '../assets/bedroom-painting.png'
import accentWallPainting from '../assets/accent-wall-painting.png'
import centralAc from '../assets/central-ac.png'
import bathroom from '../assets/bathroom.png'
import Footer from '../components/Footer'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom';

function Services() {
    const [value, setValue] = React.useState('');
    const navigate = useNavigate();
    const navigateToCleaners = () => {
        navigate('/services/cleaner');
    };
    const navigateToPainter = () => {
        navigate('/services/painter');
    };
    const navigateToElectrician = () => {
        navigate('/services/electrician');
    };
    const navigateToPlumber = () => {
        navigate('/services/plumber');
    };
    const navigateToHomeImprovementSevices = () => {
        navigate('/services/home-services');
    };
    const ScrollToSection = (event) => {
        console.log(event.target.value);
        setValue(event.target.value);
        const element = document.getElementById(event.target.value);
        element.scrollIntoView();
    }
    return (
        <div>
            <div className="services-head">
                <section className="cover-img">
                    <div id="title-cover-img">
                        <h1>Choose a service to get started.</h1>
                        <select name="seriveces" id="profession" value={value} onChange={ScrollToSection} >
                            <option value="">Search for your service</option>
                            <option value="popular">Popular Services</option>
                            <option value="cleaning-section">Cleaning</option>
                            <option value="painting-section">Painting</option>
                            <option value="electrical-section">Electrical</option>
                            <option value="plumbing-section">Plumbing</option>
                            <option value="home-improvement-section">Home Improvement Projects</option>
                        </select>
                    </div>
                </section>
                <section className="services-bottom">
                    <section className="services-left">
                        <div id="services-left">
                            <h2>All Categories</h2>
                            <br />
                            <Link to="popular" spy={true} smooth={true} offset={-50} duration={500}><h3>Popular</h3></Link>
                            <Link to="cleaning-section" spy={true} smooth={true} offset={-100} duration={500}><h3>Cleaning</h3></Link>
                            <Link to="tv-electronics-section" spy={true} smooth={true} offset={-100} duration={500}><h3>TV and Electronics</h3></Link>
                            <Link to="plumbing-section" spy={true} smooth={true} offset={-100} duration={500}><h3>Plumbing</h3></Link>
                            <Link to="electrical-section" spy={true} smooth={true} offset={-100} duration={500}><h3>Electrical</h3></Link>
                            <Link to="painting-section" spy={true} smooth={true} offset={-100} duration={500}><h3>Painting</h3></Link>
                            <Link to="home-improvement-section" spy={true} smooth={true} offset={-100} duration={500}><h3>Home Improvement Projects</h3></Link>
                        </div>
                    </section>
                    <section className="services-right">
                        {/* POPULAR */}
                        <section id="popular" name='popular'>
                            <div id="service-right-title">
                                <h2>Popular</h2>
                            </div>
                            <div className="services-right-cards">
                                <div className="cleaner" onClick={navigateToCleaners}>
                                    <div className="services-right-card">
                                        <img src={cleaner} alt="cleaner" />
                                        <div className='services-right--name'>
                                            <h4>Home Cleaning</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="carpenter" onClick={navigateToHomeImprovementSevices}>
                                    <div className="services-right-card">
                                        <img src={furnitureAssembly} alt="carpenter" />
                                        <div className='services-right--name'>
                                            <h4>Furniture Assembly</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="HandymanServices" onClick={navigateToHomeImprovementSevices}>
                                    <div className="services-right-card">
                                        <img src={HandymanServices} alt="HandymanServices" />
                                        <div className='services-right--name'>
                                            <h4>Handyman Services</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="TVMounting" onClick={navigateToElectrician}>
                                    <div className="services-right-card">
                                        <img src={TVMounting} alt="TVMounting" />
                                        <div className='services-right--name'>
                                            <h4>TV Mounting</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="OfficeCleaning" onClick={navigateToCleaners}>
                                    <div className="services-right-card">
                                        <img src={OfficeCleaning} alt="OfficeCleaning" />
                                        <div className='services-right--name'>
                                            <h4>Office Cleaning</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="painter" onClick={navigateToPainter}>
                                    <div className="services-right-card">
                                        <img src={painter} alt="painter" />
                                        <div className='services-right--name'>
                                            <h4>Painter</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="tags-section">
                            <h3>Interior Painting</h3>
                            <h3>Shifting Items</h3>
                            <h3>Ac Assembly</h3>
                            <h3>Wall Painting</h3>
                            <h3>Office Cleaning</h3>
                            <h3>Home theature Assembly</h3>
                        </section>
                        {/* Cleaning */}
                        <section id="cleaning-section">
                            <div id="service-right-title">
                                <h2>Cleaning</h2>
                            </div>
                            <div className="services-right-cards">
                                <div className="cleaner" onClick={navigateToCleaners}>
                                    <div className="services-right-card">
                                        <img src={cleaner} alt="cleaner" />
                                        <div className='services-right--name'>
                                            <h4>Home Cleaning</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="vacationalCleaning" onClick={navigateToCleaners}>
                                    <div className="services-right-card">
                                        <img src={vacationalCleaning} alt="vacationalCleaning" />
                                        <div className='services-right--name'>
                                            <h4>Vacational Rental Cleaning</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="OfficeCleaning" onClick={navigateToCleaners}>
                                    <div className="services-right-card">
                                        <img src={OfficeCleaning} alt="OfficeCleaning" />
                                        <div className='services-right--name'>
                                            <h4>Office Cleaning</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="tags-section">
                            <h3>Bedroom Cleaning</h3>
                            <h3>Hardware Cleaning</h3>
                            <h3>Kitchen Cleaning</h3>
                            <h3>Apartment Cleaning</h3>
                            <h3>Cleaning Service</h3>
                            <h3>Local Cleaning Service</h3>
                            <h3>Commercial Sanitization</h3>
                            <h3>Deep Cleaning Service</h3>
                            <h3>Housekeeping</h3>
                            <h3>Home Sanitization</h3>
                        </section>
                        {/* TV and Electronics */}
                        <section id="tv-electronics-section">
                            <div id="service-right-title">
                                <h2>Tv and Electronics</h2>
                            </div>
                            <div className="services-right-cards">
                                <div className="TVMounting" onClick={navigateToElectrician}>
                                    <div className="services-right-card">
                                        <img src={TVMounting} alt="TVMounting" />
                                        <div className='services-right--name'>
                                            <h4>TV Mounting</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="PcBuild" onClick={navigateToElectrician}>
                                    <div className="services-right-card">
                                        <img src={PcBuild} alt="PcBuild" />
                                        <div className='services-right--name'>
                                            <h4>PC Building</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="tags-section">
                            <h3>Hiding TV Wires</h3>
                            <h3>TV Wall Mount Installation</h3>
                            <h3>TV Mounting</h3>
                            <h3>Soundbar Installation</h3>
                            <h3>Home Theater AV Setup</h3>
                            <h3>TV Installation</h3>
                        </section>
                        {/* Plumbing */}
                        <section id="plumbing-section">
                            <div id="service-right-title">
                                <h2>Plumbing</h2>
                            </div>
                            <div className="services-right-cards">
                                <div className="plumber" onClick={navigateToPlumber}>
                                    <div className="services-right-card">
                                        <img src={plumber} alt="plumber" />
                                        <div className='services-right--name'>
                                            <h4>Plumbing Service</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="toilet" onClick={navigateToPlumber}>
                                    <div className="services-right-card">
                                        <img src={toilet} alt="toilet" />
                                        <div className='services-right--name'>
                                            <h4>Toilet Trouble</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="faucet" onClick={navigateToPlumber}>
                                    <div className="services-right-card">
                                        <img src={faucet} alt="faucet" />
                                        <div className='services-right--name'>
                                            <h4>Faucet Replacement</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="tags-section">
                            <h3>Drain Repair</h3>
                            <h3>Faucet Installation</h3>
                            <h3>Faucet Repair</h3>
                            <h3>Sink Replacement</h3>
                            <h3>Toilet Repair</h3>
                            <h3>Toilet Replacement</h3>
                            <h3>Unclog Toilet</h3>
                            <h3>Faucet Replacement</h3>
                            <h3>Toilet Trouble</h3>
                        </section>
                        {/* Electrical */}
                        <section id="electrical-section">
                            <div id="service-right-title">
                                <h2>Electrical</h2>
                            </div>
                            <div className="services-right-cards">
                                <div className="electricalService" onClick={navigateToElectrician}>
                                    <div className="services-right-card">
                                        <img src={electricalService} alt="electricalService" />
                                        <div className='services-right--name'>
                                            <h4>electrical Service</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="outlet" onClick={navigateToElectrician}>
                                    <div className="services-right-card">
                                        <img src={outlet} alt="outlet" />
                                        <div className='services-right--name'>
                                            <h4>Outlet Installation</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="bulb" onClick={navigateToElectrician}>
                                    <div className="services-right-card">
                                        <img src={bulb} alt="bulb" />
                                        <div className='services-right--name'>
                                            <h4>Bulbs Installation</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="tags-section">
                            <h3>Ceiling and Bath Fans</h3>
                            <h3>Light Switch Installation</h3>
                            <h3>Smart Security Cam Installation</h3>
                            <h3>Smart Thermostat Installation</h3>
                            <h3>Outlet Installation</h3>
                            <h3>Light Fixtures</h3>
                        </section>
                        {/* Painting */}
                        <section id="painting-section">
                            <div id="service-right-title">
                                <h2>Painting</h2>
                            </div>
                            <div className="services-right-cards">
                                <div className="interiorPainting" onClick={navigateToPainter}>
                                    <div className="services-right-card">
                                        <img src={interiorPainting} alt="interiorPainting" />
                                        <div className='services-right--name'>
                                            <h4>Interior Painting</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="bedroomPainting" onClick={navigateToPainter}>
                                    <div className="services-right-card">
                                        <img src={bedroomPainting} alt="bedroomPainting" />
                                        <div className='services-right--name'>
                                            <h4>Bedroom Painting</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="accentWallPainting" onClick={navigateToPainter}>
                                    <div className="services-right-card">
                                        <img src={accentWallPainting} alt="accentWallPainting" />
                                        <div className='services-right--name'>
                                            <h4>Accent Wall Painting</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="tags-section">
                            <h3>Baseboard Painting</h3>
                            <h3>Crown Molding Painting</h3>
                            <h3>Door Painting</h3>
                            <h3>Doorframe Painting</h3>
                            <h3>House Painting</h3>
                            <h3>Wall Painting</h3>
                            <h3>Interior Painting</h3>
                            <h3>Bedroom Painting</h3>
                            <h3>Accent Wall Painting</h3>
                        </section>
                        <section id="home-improvement-section">
                            <div id="service-right-title">
                                <h2>Home Improvements Projects</h2>
                            </div>
                            <div className="services-right-cards">
                                <div className="centralAc" onClick={navigateToHomeImprovementSevices}>
                                    <div className="services-right-card">
                                        <img src={centralAc} alt="centralAc" />
                                        <div className='services-right--name'>
                                            <h4>Central A/C Installation</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="bathroom" navigateToHomeImprovementSevices>
                                    <div className="services-right-card">
                                        <img src={bathroom} alt="bathroom" />
                                        <div className='services-right--name'>
                                            <h4>Bedroom Remodelling</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="tags-section">
                            <h3>Alarm System Installation</h3>
                            <h3>Carpet Installation</h3>
                            <h3>Ceramic Tile Repair</h3>
                            <h3>Asphalt Paving Installation</h3>
                            <h3>Fence Installation</h3>
                            <h3>Interior Decorating Services</h3>
                        </section>
                    </section>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Services