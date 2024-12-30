import React, { useState } from 'react'
import user from './Login.json'

function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const [error, setError] = useState();

    const handleClick = () => {
        user.filter((item) => {
            if (item.username === username && item.password === password) {
                alert("Successfully");
            } else {
                setError("Invalid");
            }
        })
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
        if (username === "") {
            setError("Invalid");
        } else {
            setError("");
        }
    }
    const handlePassword = (e) => {
        if (password === "") {
            setError("Invalid");
        } else {
            setError("");
        }
        setPassword(e.target.value);
    }

    return (
        <div className='container'>
            <div className='sub'>
                <input type='text' placeholder='Enter name' onChange={handleUsername} /> <p>{error}</p><br />
                <input type='password' placeholder='Enter Email' onChange={handlePassword} /><p>{error}</p><br />
                <button onClick={handleClick}>Submit</button>
            </div>
        </div>
    )
}

export default Login