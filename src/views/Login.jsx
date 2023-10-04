import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try{
            const response = await axios.post('http://localhost:4001/auth/login', { username, password });
            console.log(response.data);
        }catch(error){
            console.error(error);
        }
    }

    return (
        <>
            <input 
                type='text'
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
            <button onClick={handleLogin}>Login</button>
        </>
    )

}

export default Login;