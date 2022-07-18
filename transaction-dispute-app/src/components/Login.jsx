import { Paper } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Comerica-logo.png';
import './Login.css';
import { useEffect } from 'react';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    const login = async () => {
    
        await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: new Headers({'Content-Type': 'application/json;'}),
            mode: 'cors',
        }).then((res) => res.json())
        // Update the state with the received response
        .then(setUserData)
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        if(userData){
            navigate('/dashboard');
        }
    }, [userData, navigate]);

    return(
        <>
            <div className="content">
                <img src={logo} role="img" className="App-logo" alt="comerica-logo"/>
                <Paper elevation={2} sx={{ position: 'relative', top: '2rem'}}>
                    <form className='login-form' onSubmit={(e) => {
                            e.preventDefault();
                            login();
                        }}>
                        <label htmlFor="name">Enter your username</label>
                        <input type='text' role="textbox" id="username" onChange={(e) => setUsername(e.target.value)} required/>
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