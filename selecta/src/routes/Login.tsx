import React, { ChangeEvent, useContext, useState } from "react";
import Header from "../elements/Header";
import Footer from "../elements/Footer";
import { AuthContext, ThemeContext } from "../App";
import useInput from "../hooks/useInput";


const Login = () => {
    const theme = useContext(ThemeContext);
    const authentic = useContext(AuthContext);

    const [auth, setAuth] = useState('login');
    const [key, setKey] = useState('');
    const login = useInput('');
    const password = useInput('');
    const passwordRepeat = useInput('');
    const email = useInput('');

    const toggleAuth = () => {
        if (auth == 'login') setAuth('register');
        else setAuth('login');
    }

    const handleSubmit = () => {
        if (auth === 'login') {
            if (login.value != '' && password.value !='') {
            const response = fetch('http://localhost:5000/auth/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    login: login.value,
                    password: password.value,
                }),
            });
            console.log(response);
        }
        }
    }

    return (
        <div className={' text-' + (theme.theme === 'white' ? 'black' : 'white') }>
            <Header/>
            <form className="text-center">
                {auth === 'login' ? (
                    <>
                    <p>LOGIN</p>
                    <label className="pb-3">
                        <input className="form-control" type="login" onChange={login.onChange}/>
                    </label>
                    <p>PASSWORD</p>
                    <label typeof="password">
                        <input className="form-control" typeof="password" onChange={password.onChange}/>
                    </label>
                    </>
                ) : (
                    <>
                    <p>LOGIN</p>
                    <label className="pb-3">
                        <input className="form-control" typeof="login"  onChange={login.onChange}/>
                    </label>
                    <p>EMAIL</p>
                    <label className="pb-3">
                        <input  className="form-control" typeof="email"  onChange={email.onChange}/>
                    </label>
                    <p>PASSWORD</p>
                    <label typeof="password" className="pb-3">
                        <input className="form-control" typeof="password" onChange={password.onChange}/>
                    </label>
                    <p>REPEAT PASSWORD</p>
                    <label typeof="password">
                        <input className="form-control" typeof="password" onChange={passwordRepeat.onChange} />
                    </label>
                    </>
                )}
                <br/>
                <button className="mt-3 mb-3" type="button" onClick={handleSubmit}>submit</button>
            </form>
            {auth === 'login' ? (
                <div className="text-center pb-3">
                    doesnt have account? <br/>
            
                    <a href='#' onClick={toggleAuth} >register</a>
                </div>
            ) : (
             <div className="text-center pb-3">
                already have account? <br/>

                <a href='#' onClick={toggleAuth}>login</a>
            </div>
            )}
            <Footer />
        </div>
    )
}

export default Login;