import React, { ChangeEvent, Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import Header from "../elements/Header";
import Footer from "../elements/Footer";
import useInput from "../hooks/useInput";
import useTheme from "../hooks/useTheme";
import LoginForm from "../elements/LoginForm";
import RegisterForm from "../elements/RegisterForm";
;

interface ITypeContext {
    type: string;
    setType: Dispatch<SetStateAction<string>>;
}

export const TypeContext = createContext<ITypeContext>({type: '', setType: () => {}})

const Login = () => {
    const [type, setType] = useState("white");
    // const authentic = useContext(AuthContext);

    // const [type, setType] = useState('login');


    // const toggleAuth = () => {
    //     if (type == 'login') 
    //         setType('register');
    //     else 
    //         setType('login');
    // }

    // const handleSubmit = () => {
    //     if (type === 'login') {
    //         if (login.value != '' && password.value !='') {
    //         const response = fetch('http://localhost:5000/auth/login/', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 login: login.value,
    //                 password: password.value,
    //             }),
    //         });
    //         console.log(response);
    //     }
    //     }
    // }


    const theme = useTheme();

    return (
        <TypeContext.Provider value={{type,setType}}>
        <div className={'text-' + theme.oppColor}>
            <Header/>
            {type === 'login' ? (
                <LoginForm/>
            ) : (
                <RegisterForm/>
            )}
            <Footer />
        </div>
        </TypeContext.Provider>
    )
}

export default Login;