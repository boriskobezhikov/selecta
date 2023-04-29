import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import LoginLabel from './LoginLabel';

type registerLoginType = {
    type: string;
}

const LoginForm = (props: registerLoginType) => {

    const theme = useContext(ThemeContext)

    return (
        <div className='container-fluid text-center pb-3 fs-3' style={{color: (theme.theme === 'white' ? 'black' : 'white'), fontWeight: '800'}}>
            {props.type === 'login' ? (
                            <>
                            <LoginLabel text='login' type='login' />
                            <LoginLabel text='password' type = 'password'/>
                            </>
            ) : (
                <>
                <LoginLabel text='email' type='email'/>
                <LoginLabel text='login' type='login'/>
                <LoginLabel text='password' type='password'/>
                <LoginLabel text='repeat password' type='password'/>
                </>
            )}
        </div>
    )
}

export default LoginForm;