import React, { useState } from 'react'
import './Contactform.css'

function Contactform() {
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [mobile, setMobile] = useState([]);
    const [password, setPassword] = useState([]);

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleMobile = (e) => {
        setMobile(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    const handleSubmit = () => {
        if(name == ""){
            console.log("Please Enter Name");
        } else if(email == ""){
            console.log("Please Enter Email");
        } else if(mobile == ""){
            console.log("Please Enter Mobile");
        } else if(password == ""){
            console.log("Please Enter Password");
        } else {
            alert("Thanks, Successfully Submitted");
        }
    }

    return (
        <div>
            <div>
                <form>
                    <input type='text' placeholder='Enter Username' onChange={handleName} /><br />
                    <input type='email' placeholder='Enter Email' onChange={handleEmail} /><br />
                    <input type='text' placeholder='Enter Mobile' onChange={handleMobile} /><br />
                    <input type='password' placeholder='Enter Password' onChange={handlePassword} />
                </form>
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Contactform