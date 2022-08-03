import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';

function Contacts() {

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
        console.log(formValue)
    }

    const submitFrom = async (e) => {
        e.preventDefault();
        try {
            await axios({
                method: "post",
                url: "https://formspree.io/f/xzbwpajn",
                data: formValue
            }).then(res => {
                console.log(res.status)
                alert("Thank You for your Feedback")
                navigate("/home")
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section class="handyform">
            <div className="cover-image">
                <div className="cover-image-black-box">
                    <h2>How Can We Help?</h2>
                    <h4>Need Something? The HandyMan is here to help! <br />
                        For all enquires please contact us throught the form below  </h4>
                </div>
            </div>
            <div class="handyform-head">
                <form onSubmit={(e) => submitFrom(e)}>
                    <div class="name-form form">
                        <label for="name" >Name : </label>
                        <br />
                        <br />
                        <input type="text" name="name" id="name" placeholder="Enter your name" value={formValue.name}
                            onChange={(e) => handleChange(e)} required />
                    </div>
                    <div class="email-form form">
                        <label for="email">Email : </label>
                        <br />
                        <br />
                        <input type="email" name="email" id="email" placeholder="Enter your email" value={formValue.email}
                            onChange={(e) => handleChange(e)} required />
                    </div>
                    <div class="suggestions form">
                        <label for="suggestions" >Suggestions : </label>
                        <br />
                        <br />
                        <input type="text" name="suggestions" id="suggestions" placeholder="Enter your sugesstions" value={formValue.suggestions}
                            onChange={(e) => handleChange(e)} required />
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className='submit-btn-handyform'>
                        <button id='become-a-handy-submit'>Sumbit</button>
                    </div>
                </form>
            </div>
            <Footer />
        </section>
    )
}

export default Contacts