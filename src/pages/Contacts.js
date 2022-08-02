import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Contacts() {

    const url = 'http://localhost:8080/contact'
    const navigate = useNavigate();
    const [formValue, setformValue] = useState({
        name: '',
        email: '',
        suggestions: '',
    });

    const handleChange = (e) => {
        const newData = { ...formValue }
        newData[e.target.id] = e.target.value;
        setformValue(newData)
        console.log(newData)
    }

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
                email: formValue.email,
                suggestions: formValue.suggestions,
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

    return (
        <section class="handyform">
            <div class="handyform-head">
                <form>
                    <div class="name-form form">
                        <label for="name" >Name : </label>
                        <br />
                        <br />
                        <input type="text" name="name" id="name" alt="Enter your name" value={formValue.name}
                            onChange={(e) => handleChange(e)} required />
                    </div>
                    <div class="email-form form">
                        <label for="email">Email : </label>
                        <br />
                        <br />
                        <input type="email" name="email" id="email" alt="enter your email" value={formValue.email}
                            onChange={(e) => handleChange(e)} required />
                    </div>
                    <div class="sugeestions form">
                        <label for="sugeestions" >Suggestions : </label>
                        <br />
                        <br />
                        <input type="text" name="sugeestions" id="sugeestions" alt="Enter your year of experience" value={formValue.suggestions}
                            onChange={(e) => handleChange(e)} required />
                    </div>
                    <div class="agreement-form checkbox">
                        <input type="checkbox" name="checkbox" id="checkbox" required />
                        <label for="checkbox">Agree to your privacy policy </label>
                    </div>
                    <div className='submit-btn-handyform'>
                        <button id='become-a-handy-submit'>Sumbit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contacts