import React, { useState } from 'react'
import './Contactform.css'

function Contactform() {
    const [name, setName] = useState([]);
    const [nameError, setNameerror] = useState([]);
    const [email, setEmail] = useState([]);
    const [emailError, setEmailerror] = useState([]);
    const [mobile, setMobile] = useState([]);
    const [mobileError, setMobileerror] = useState([]);
    const [password, setPassword] = useState([]);
    const [passwordError, setPassworderror] = useState([]);

    const handleName = (e) => {
        setName(e.target.value);
        setNameerror("");
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailerror("")
    }
    const handleMobile = (e) => {
        setMobile(e.target.value);
        setMobileerror("")
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPassworderror("")
    }


    const handleSubmit = () => {
    
        if(name == ""){
            setNameerror("Please Enter Name");
        } 
        
        if(email == ""){
            setEmailerror("Please Enter Email");
        } 
        
        if(mobile == ""){
            setMobileerror("Please Enter Mobile");
        }  
        
        if(password == ""){
            setPassworderror("Please Enter Password");
        }

    }

    return (
        <div>
            <div>
                <form>
                    <input type='text' placeholder='Enter Username' onChange={handleName} /><br />
                    <p>{nameError}</p>
                    <input type='email' placeholder='Enter Email' onChange={handleEmail} /><br />
                    <p>{emailError}</p>
                    <input type='text' placeholder='Enter Mobile' onChange={handleMobile} /><br />
                    <p>{mobileError}</p>
                    <input type='password' placeholder='Enter Password' onChange={handlePassword} />
                    <p>{passwordError}</p>
                </form>
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Contactform