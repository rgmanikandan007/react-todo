import React, { useState } from 'react'
import './Contactform.css'

function Contactform() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = () => {
        if(name == ""){
            console.log("Please Enter name");
        }
    }

    return (
        <div>
            <div>
                <form>
                    <input type='text' placeholder='Enter Username' value={name} /><br />
                    <input type='email' placeholder='Enter Email' value={email} /><br />
                    <input type='text' placeholder='Enter Mobile' value={mobile} /><br />
                    <input type='password' placeholder='Enter Password' value={password} />
                </form>
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Contactform