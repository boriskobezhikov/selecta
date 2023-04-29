import React, { useContext } from "react";
import Header from "../elements/Header";
import Footer from "../elements/Footer";
import { ThemeContext } from "../App";
import { Link } from "react-router-dom";
import LoginForm from "../elements/LoginForm";

const Login = () => {
    const theme = useContext(ThemeContext);

    return (
        <div className={' text-' + (theme.theme === 'white' ? 'black' : 'white') }>
            <Header/>
            <LoginForm type='login'></LoginForm>
            <div className="text-center pb-3">
                doesnt have account? <br/>

                <Link to='/register'>register</Link>
            </div>
            <Footer />
        </div>
    )

}

export default Login