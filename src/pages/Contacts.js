import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        console.log(newData)
    }

    const submit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/contact", {
                params: {
                    name : formValue.name,
                    message: formValue.suggestions,
                    email: formValue.email 
                }
            }).then((res) => {
                if(res === "success"){
                    alert("Mail Sent Successfully")
                } else {
                    alert("Something went wrong")
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section class="handyform">
            <div class="handyform-head">
                <form onSubmit={(e) => submit}>
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
                    <div class="suggestions form">
                        <label for="suggestions" >Suggestions : </label>
                        <br />
                        <br />
                        <input type="text" name="suggestions" id="suggestions" alt="Enter your sugesstions" value={formValue.suggestions}
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
        </section>
    )
}

export default Contacts