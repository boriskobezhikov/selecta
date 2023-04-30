import React, {Dispatch, SetStateAction, createContext, useState } from "react";
import Header from "../elements/Header";
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

        </div>
        </TypeContext.Provider>
    )
}

export default Login;