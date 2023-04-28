import React, { useContext } from "react";
import Header from "../elements/Header";
import Footer from "../elements/Footer";
import LoginForm from "../elements/LoginForm";
import { ThemeContext } from "../App";
import { Link } from "react-router-dom";

const Login = () => {
    const theme = useContext(ThemeContext);

    return (
        <div className={' text-' + (theme.theme === 'white' ? 'black' : 'white') }>
            <Header/>
            <LoginForm text='login'/>
            <LoginForm text='password' />
            <div className="text-center pb-3">
                doesnt have account? <br/>

                <Link to='/register'>register</Link>
            </div>
            <Footer />
        </div>
    )

}

export default Login