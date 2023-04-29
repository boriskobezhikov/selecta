import React, { ChangeEvent, useContext, useState } from "react";
import Header from "../elements/Header";
import Footer from "../elements/Footer";
import { ThemeContext } from "../App";
import { Link } from "react-router-dom";

const Login = () => {
    const theme = useContext(ThemeContext);
    const [auth, setAuth] = useState('login');
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    const toggleAuth = () => {
        if (auth == 'login') setAuth('register');
        else setAuth('login');
    }

    return (
        <div className={' text-' + (theme.theme === 'white' ? 'black' : 'white') }>
            <Header/>
            <form className="text-center">
                {auth === 'login' ? (
                    <>
                    <p>LOGIN</p>
                    <label className="pb-3">
                        <input className="form-control" type="text"/>
                    </label>
                    <p>PASSWORD</p>
                    <label typeof="password">
                        <input className="form-control" typeof="password" />
                    </label>
                    </>
                ) : (
                    <>
                    <p>LOGIN</p>
                    <label>
                        <input className="form-control" typeof="text" />
                    </label>
                    <p>EMAIL</p>
                    <label>
                        <input  className="form-control" typeof="email" />
                    </label>
                    <p>PASSWORD</p>
                    <label typeof="password">
                        <input className="form-control" typeof="password" />
                    </label>
                    <p>REPEAT PASSWORD</p>
                    <label typeof="password">
                        <input className="form-control" typeof="password" />
                    </label>
                    </>
                )}
                <br/>
                <button className="mt-3 mb-3" type="submit">submit</button>
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