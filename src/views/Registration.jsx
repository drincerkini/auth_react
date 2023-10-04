import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    //method to handle the form registration
    const handleRegister = async () => {
        try{
            const response = await axios.post('http://localhost:4001/auth/register', { username, password });
            console.log('user register successfuly: ' + response.data);
            // Example usage after successful registration or login response:
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', response.data.user.username);
            navigate('/');
        }catch(error){
            console.error(error);
        }
    };

    return (
        <>
            <h2>Registration</h2>

            <input 
                type="text" 
                placeholder='Username'
                value={username}
                onChange={ (e) => setUsername(e.target.value)}
            />
            <input 
                type='password'
                placeholder='Password'
                value={password}
                onChange={ (e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>

        </>
    )

}

export default Registration;