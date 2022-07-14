import { Paper } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../Comerica-logo.png';
import './Login.css';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    const login = () => {
        console.log("logging in");
        /*const response = await axios.post('/login', {}, { headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
            }, params: {},
        }).catch(error => {
            console.log(error);
        })*/

        //console.log("res:", response);
        fetch('/login', {
            method: 'POST',
        })
            .then((res) => res.json())
            // Update the state with the received response
            .then(setUserData)
    }

    return(
        <>
            <div className="content">
                <img src={logo} className="App-logo" alt="comerica-logo"/>
                <Paper elevation={2} sx={{ position: 'relative', top: '2rem'}}>
                    <form className='login-form' onSubmit={(e) => {
                            e.preventDefault();
                            console.log("submitted", username, password);
                            login();
                            //navigate('/dashboard')
                        }}>
                        <label htmlFor="name">Enter your username</label>
                        <input type='text' id="username" onChange={(e) => setUsername(e.target.value)} required/>
                        <label htmlFor="password">Enter your password</label>
                        <input type='password' id="password" onChange={(e) => setPassword(e.target.value)} required/>
                        <button type='submit'>Sign In</button>
                    </form>
                </Paper>
            </div>
            <div className='background'></div>
        </>
    )
}