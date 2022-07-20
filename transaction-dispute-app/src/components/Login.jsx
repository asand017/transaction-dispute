import { Paper } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Comerica-logo.png';
import './Login.css';
import { useEffect } from 'react';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    const login = async () => {
        await fetch('/login', {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            mode: 'cors',
            body: JSON.stringify({username: username, password: password}),
        }).then((res) => res.json())
        // Update the state with the received response
        .then((data) => {
            //Persist user's authentication in the session
            sessionStorage.setItem('is-authenticated', 'true')
            setUserData(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const validate = () => {
        let uname = username;
        let pword = password;
        let unameError = usernameError;
        let pwordError = passwordError;
        let error = false;

        if(!uname) {
            unameError = "Username cannot be blank";
            setUsernameError(unameError);
            error = true;
        }else
            setUsernameError('');

        if(pword.length < 10) {
            pwordError = "Password must be at least 10 characters long";
            setPasswordError(pwordError);
            error = true;
        }else
            setPasswordError('');

        if(error)
            return false;
        
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = validate();
        if (isValid)
            login();
        
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
                    <form className='login-form' onSubmit={handleSubmit}>
                        <div style={{ display: 'flex', flexDirection: 'column'}}>
                            <label htmlFor="name">Enter your username</label>
                            <input type='text' role="textbox" id="username" onChange={(e) => setUsername(e.target.value)}/>
                            {usernameError && <div style={{color: 'red'}}>{usernameError}</div>}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column'}}>
                            <label htmlFor="password">Enter your password</label>
                            <input type='password' id="password" onChange={(e) => setPassword(e.target.value)}/>
                            {passwordError && <div style={{color: 'red'}}>{passwordError}</div>}
                        </div>
                        <button type='submit'>Sign In</button>
                    </form>
                </Paper>
            </div>
            <div className='background'></div>
        </>
    )
}