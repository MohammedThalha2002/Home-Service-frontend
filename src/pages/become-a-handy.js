import React, { useEffect, useState } from 'react'
import './Handyform.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function HandyForm() {
    const url = 'http://localhost:8080/create'
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    const [formValue, setformValue] = useState({
        name: '',
        profession: '',
        desc: '',
        experience: '',
        phone: '',
        email: '',
        address: '',
        rating: '0',
        geoLocation: ''
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        });

    }, [])


    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        try {
            let config = {
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                }
            }
            // make axios post request
            axios.post(url, {
                name: formValue.name,
                profession: formValue.profession,
                desc: formValue.desc,
                experience: formValue.experience,
                phone: formValue.phone,
                email: formValue.email,
                address: formValue.address,
                rating: '0',
                geoLocation: {
                    latitude: lat,
                    longitude: lon,
                }
            }, config).then(res => {
                console.log(res.status)
                alert("Sucess")
                navigate("/home")
            })
        } catch (error) {
            console.log(error)
            alert("Something went wrong")
        }
    }

    const handleChange = (e) => {
        const newData = { ...formValue }
        newData[e.target.id] = e.target.value;
        setformValue(newData)
        console.log(newData)
    }
    return (
        <section class="handyform">
            <div class="handyform-head">
                <form onSubmit={(e) => submit(e)}>
                    <div class="name-form form">
                        <label for="name" >Name : </label>
                        <input type="text" name="name" id="name" alt="enter your name" value={formValue.name}
                            onChange={(e) => handleChange(e)} required />
                    </div>
                    <div class="profession-form form">
                        <label for="profession" >Profession : </label>
                        <select name="profession" id="profession" onChange={(e) => handleChange(e)} value={formValue.profession} required >
                            <option value="">--Select your Profession--</option>
                            <option value="cleaner">Cleaner</option>
                            <option value="painter">Painter</option>
                            <option value="electrician">Electrician</option>
                            <option value="plumber">Plumber</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="job-form form">
                        <label for="jobdesc" >Job Description : </label>
                        <input type="text" name="desc" id="desc" alt="enter your year of experience" value={formValue.desc}
                            onChange={(e) => handleChange(e)} required />
                    </div>
                    <div class="experience-form form">
                        <label for="name" >Year of Experience : </label>
                        <input type="number" name="experience" id="experience" alt="enter your year of experience" value={formValue.experience}
                            onChange={(e) => handleChange(e)} required />
                    </div>
                    <div class="phone-form form">
                        <label for="phone" >Phone Number : </label>
                        <input type="phonenumber" name="phone" id="phone" alt="enter your phone number" value={formValue.phone}
                            onChange={(e) => handleChange(e)} required />
                    </div>
                    <div class="email-form form">
                        <label for="email">Email : </label>
                        <input type="email" name="email" id="email" alt="enter your email" value={formValue.email}
                            onChange={(e) => handleChange(e)} required />
                    </div>
                    <div class="address-form form">
                        <label for="address" >Address : </label>
                        <input type="address" name="address" id="address" alt="enter your address" value={formValue.address}
                            onChange={(e) => handleChange(e)} required />
                    </div>
                    <div class="agreement-form checkbox">
                        <input type="checkbox" name="checkbox" id="checkbox" required />
                        <label for="checkbox">Agree to your privacy policy </label>
                    </div>
                    <div className='submit-btn-handyform'>
                        <button id='become-a-handy-submit'>Become a Handy</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default HandyForm