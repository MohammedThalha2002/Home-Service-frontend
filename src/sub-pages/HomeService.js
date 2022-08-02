import { useState, useEffect } from 'react'
import axios from 'axios';
import './sub-pages-style.css'
import sendEmail from '../api/sendEmail';


function HomeService() {
    const baseURL = "http://localhost:8080/users/other"
    const nearbyUsersUrl = "http://localhost:8080/users/other/outdistance"
    const [allUserData, setallUserData] = useState([]);
    const [nearbyUserData, setnearbyUserData] = useState([]);


    // Getting user's current Geolocation
    // At the same time collecting the nearby users data
    const GetTheCurrentPosition = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            axios.get(nearbyUsersUrl, {
                params: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    distance: 20, //radius to serach for the handymans
                }
            }).then(res => {
                setnearbyUserData(res.data)
                console.log("nearby users data : " + res.data);
            }).catch(err => console.log(err))
        });
    }


    // Getting data for all the users
    const GetAllTheUsers = async () => {
        await axios.get(baseURL).then(res => {
            setallUserData(res.data)
            console.log("all users data : " + res.data);
        }).then(val => window.scrollTo(0, 0))
            .catch(err => console.log(err))
    }



    useEffect(() => {
        //1
        GetTheCurrentPosition();
        //2
        GetAllTheUsers();
    }, []);

    const allUsers = allUserData.map((data, index) => {
        return (
            <div className='sub-pages-card-content' key={data.id}>
                <h1 id='name'>{data.name}</h1>
                <ul className='service-man-details'>
                    <li>PROFESSION : {data.profession}</li>
                    <li>EXPERIENCE : {data.experience}</li>
                    <li>EMAIL      : {data.email}</li>
                    <li>PHONE      : {data.phone}</li>
                    <li>ADDRESS    : {data.address}</li>
                </ul>
                <div className="rating">
                    <h2>RATING</h2>
                    <div className="stars">
                        <div class="clip-star checked"></div>
                        <div class="clip-star checked"></div>
                        <div class="clip-star checked"></div>
                        <div class="clip-star"></div>
                        <div class="clip-star"></div>
                    </div>
                </div>
                <div className="job-description">
                    <h2>"{data.desc}"</h2>
                </div>
                <div className="hire-me-btn">
                    <button className="hire-me">Hire Me</button>
                </div>
            </div>
        )
    })

    const allNearByUsers = nearbyUserData.map((data, index) => {
        return (
            <div className='sub-pages-card-content' key={data.id}>
                <h1 id='name'>{data.name}</h1>
                <ul className='service-man-details'>
                    <li>PROFESSION : {data.profession}</li>
                    <li>EXPERIENCE : {data.experience}</li>
                    <li>EMAIL      : {data.email}</li>
                    <li>PHONE      : {data.phone}</li>
                    <li>ADDRESS    : {data.address}</li>
                </ul>
                <div className="rating">
                    <h2>RATING</h2>
                    <div className="stars">
                        <div class="clip-star checked"></div>
                        <div class="clip-star checked"></div>
                        <div class="clip-star checked"></div>
                        <div class="clip-star"></div>
                        <div class="clip-star"></div>
                    </div>
                </div>
                <div className="job-description">
                    <h2>"{data.desc}"</h2>
                </div>
                <button className="hire-me-btn" onClick={(e) => sendEmail(data.email)}>
                    Hire me
                </button>
            </div>
        )
    })



    return (
        <div className="sub-pages-body">
            <div className="sub-page-cover-img home-service-cover-img"></div>
            <h2 id='sub-pages-body-heading'>Nearby Users</h2>
            <div className="nearby-users" sub-pages-card>
                <div className="sub-pages-card">
                    {allNearByUsers}
                </div>
            </div>
            <hr />
            <h2 id='sub-pages-body-heading'>All Handymans</h2>
            <div className="sub-pages-card">
                {allUsers}
            </div>
        </div>
    )
}

export default HomeService