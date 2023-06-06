import React, {Dispatch, SetStateAction, createContext, useState } from "react";
import Header from "../elements/Header";
import useTheme from "../hooks/useTheme";
import LoginForm from "../elements/LoginForm";
import RegisterForm from "../elements/RegisterForm";
import Footer from "../elements/Footer";
;

interface ITypeContext {
    type: string;
    setType: Dispatch<SetStateAction<string>>;
}


const Login = () => {
    const [type, setType] = useState("login");

    const toggleAuth = () => {
        if (type == 'login') 
            setType('register');
        else 
            setType('login');
    }

    return (
        <div className='transition grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 md:h-screen  items-start px-2 py-4 lg:px-16 lg:py-6    dark:bg-black  dark:text-white'>
            <div className='col-span-full  '>
                <Header />
            </div>
            <div className="col-span-full mt-32 self-start">
            {type === 'login' ? (
                <>
                <LoginForm/>
                <div className="col-span-full text-center pt-5">
                    doesnt have account? <br/>
                    <a href='#' style={{color:'blue'}} onClick={toggleAuth} >register</a>
                </div>
                </> 
            ) : (
                <>
                <div className="col-span-full self-start" >
                <RegisterForm/>
                <div className="col-span-full text-center px-5">
                    already have account? <br/>
                    <a href='#' style={{color:'blue'}} onClick={toggleAuth} >login</a>
                </div> 
                </div>
                </>
            )}
            </div>
            <div className='col-span-full self-end justify-self-center '>
            <Footer/>
            </div>
        </div>
    )
}

export default Login;