import React, { useContext } from "react";
import Header from "../elements/Header";
import Footer from "../elements/Footer";
import LoginForm from "../elements/LoginForm";
import { ThemeContext } from "../App";
import { Link } from "react-router-dom";
import LoginButton from "../elements/LoginButton";

const Register = () => {
    const theme = useContext(ThemeContext);

    return (
        <div className={' text-' + (theme.theme === 'white' ? 'black' : 'white') }>
            <Header/>
            <LoginForm text='email'/>
            <LoginForm text='login' />
            <LoginForm text='password' />
            <LoginForm text='repeat password' />
            <LoginButton text="submit"></LoginButton>
            <div className="text-center pb-3">
                already have account? <br/>

                <Link to='/login'>login</Link>
            </div>
            <Footer />
        </div>
    )

}

export default Register