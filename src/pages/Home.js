import React from 'react'
import './Home.css'
import spray from '../assets/spray.png'
import services from '../assets/all-services.png'
import sofa from '../assets/Sofa.png'
import cleaner from '../assets/cleaning.png'
import carpenter from '../assets/carpenter.png'
import electrician from '../assets/electrician.png'
import painter from '../assets/painter.png'
import bathroom from '../assets/bathroom.png'
import kitchen from '../assets/kitchen.png'
import renovation from '../assets/renovations.png'
import woodflooring from '../assets/wood-flooring.png'
import handyman from '../assets/become-a-handy.png'
import Footer from '../components/Footer'
import '../components/Footer.css'
import partner1 from "../assets/partner1.png"
import partner2 from "../assets/partner2.png"
import partner3 from "../assets/partner3.png"
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();
    const navigateToServices = () => {
        navigate('/services');
    };
    const navigateToBecomeAHandy = () => {
        navigate('/become-a-handy');
    };
    const navigateToCleaners = () => {
        navigate('/services/cleaner');
    };
    const navigateToPainter = () => {
        navigate('/services/painter');
    };
    const navigateToElectrician = () => {
        navigate('/services/electrician');
    };
    const navigateToHomeImprovementSevices = () => {
        navigate('/services/home-services');
    };
    return (
        <div>
            <div className="home-head">
                <header>
                    <h1>The easy, reliable way to take care of your home.</h1>
                </header>
                {/* BoxChips section */}
                <section className="box-chips">
                    {/* All services */}
                    <div className="all-services" onClick={navigateToServices}>
                        <div className="icon">
                            <img src={services} alt="spray-paint" />
                        </div>
                        <div className="box-chips-title">
                            <h4>All Services</h4>
                        </div>
                    </div>
                    {/* cleaning */}
                    <div className="cleaning" onClick={navigateToCleaners}>
                        <div className="icon">
                            <img src={spray} alt="spray-paint" />
                        </div>
                        <div className="box-chips-title">
                            <h4>Cleaning</h4>
                        </div>
                    </div>
                    {/* furniture */}
                    <div className="furniture" onClick={navigateToServices}>
                        <div className="icon">
                            <img src={sofa} alt="spray-paint" />
                        </div>
                        <div className="box-chips-title">
                            <h4>Assembly</h4>
                        </div>
                    </div>
                </section>
                {/* List out the services */}
                <section className="home-page-services">
                    <div className="top-services">
                        <div className="services-title">
                            <h2>Cleaning & Handyman Tasks</h2>
                            <br />
                            <h4 id='services-title-desc'>Instantly book highly rated pros for cleaning and handyman tasks at an upfront price.
                            </h4>
                        </div>
                    </div>
                    <div className="services-cards">
                        {/* cleaning */}
                        <div className="cards" onClick={navigateToCleaners}>
                            <img src={cleaner} alt="cleaner" />
                            <div className='service-name'>
                                <h4>Home Cleaning</h4>
                            </div>
                        </div>
                        {/* Furniture works */}
                        <div className="cards" onClick={navigateToServices}>
                            <img src={carpenter} alt="furniture" />
                            <div className='service-name'>
                                <h4>Furniture works</h4>
                            </div>
                        </div>
                        {/* elctrical works */}
                        <div className="cards" onClick={navigateToElectrician}>
                            <img src={electrician} alt="cleaner" />
                            <div className='service-name'>
                                <h4>Electrical works</h4>
                            </div>
                        </div>
                        {/* painting works */}
                        <div className="cards" onClick={navigateToPainter}>
                            <img src={painter} alt="cleaner" />
                            <div className='service-name'>
                                <h4>Painting works</h4>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    {/* Home imporvement services */}
                    <div className="home-improvement-services">
                        <div className="services-title">
                            <h2>Home Improvement Projects</h2>
                            <br />
                            <h4 id='services-title-desc'>Get free quotes from top local home improvement pros on larger home projects.
                            </h4>
                        </div>
                    </div>
                    <div className="services-cards">
                        {/* Bathroom remodelling */}
                        <div className="cards" onClick={navigateToHomeImprovementSevices}>
                            <img src={bathroom} alt="" />
                            <div className='service-name'>
                                <h4>Bathroom Remodelling</h4>
                            </div>
                        </div>
                        {/* kitchen works */}
                        <div className="cards" onClick={navigateToHomeImprovementSevices}>
                            <img src={kitchen} alt="" />
                            <div className='service-name'>
                                <h4>Kitchen Remodelling</h4>
                            </div>
                        </div>
                        {/* works */}
                        <div className="cards" onClick={navigateToHomeImprovementSevices}>
                            <img src={renovation} alt="" />
                            <div className='service-name'>
                                <h4>Major Renovations</h4>
                            </div>
                        </div>
                        {/* wood flooring works */}
                        <div className="cards" onClick={navigateToHomeImprovementSevices}>
                            <img src={woodflooring} alt="" />
                            <div className='service-name'>
                                <h4>Install Wood flooring</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="home-bottom">
                {/* Profeesional workers section */}
                <section className="ad-1">
                    <div className="ad-block">
                        <h2>Verified, Screened Professionals</h2>
                        <h3>Cleaning and handyman tasks booked and paid for through Handy are performed by experienced, vetted providers who are highly rated by customers like you.</h3>
                        <h4>Learn more</h4>
                    </div>
                </section>
                {/* Become a Handy man */}
                <section className="become-handy">
                    <div className="wordings">
                        <h3>Want to become a Professional?</h3>
                        <h4 id='services-title-desc'>From cleaners to handymen to smart home installers, Handy is <br /> always looking for service professionals who are experts in their <br /> trade and provide great service to their customers. The best <br /> home service professionals use Handy to find jobs with no lead <br /> fees and flexible scheduling.</h4>
                        <button onClick={navigateToBecomeAHandy}>Become a Handy</button>
                    </div>
                    <div className="become-a-handy-img">
                        <img src={handyman} />
                    </div>
                </section>
                {/* Our Partners */}
                <section className="our-partners">
                    <div className="title">
                        <h2 id='services-title-desc'>Our Partners</h2>
                        <h4 id='services-title-desc'>Handy works with partners who want to provide their customers, tenants, or employees easy access to quality home services at <br /> affordable prices.</h4>
                    </div>
                    <div className="partners-img">
                        <img src={partner1} alt="" />
                        <img src={partner2} alt="" />
                        <img src={partner3} alt="" />
                    </div>
                </section>
                {/* Footer */}
                <Footer />
            </div>
        </div>
    )
}

export default Home