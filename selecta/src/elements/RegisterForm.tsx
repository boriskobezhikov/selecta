import React, { useState } from 'react';
import useInput from '../hooks/useInput';
import useLogType from '../hooks/useLogType';

function RegisterForm(){

    const type = useLogType();

    const login = useInput('');
    const password = useInput('');
    const email = useInput('');
    const passwordRepeat = useInput('');
    
    return (
        <div className="text-center">
        <form className="text-center">
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
        </form>
        <div className="text-center pb-3">
                already have account? <br/>
                <a href='#' onClick={type.onClick} >login</a>
            </div>
        </div>
        
    )
}

export default RegisterForm;