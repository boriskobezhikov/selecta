import React, { useState } from 'react';
import useInput from '../hooks/useInput';
import useLogType from '../hooks/useLogType';

function LoginForm(){
    const type = useLogType();
    const login = useInput('');
    const password = useInput('');
    
    return (
        <div className="text-center">
            <form>
                <p>LOGIN</p>
                <label className="pb-3">
                    <input className="form-control" type="login" onChange={login.onChange}/>
                </label>
                <p>PASSWORD</p>
                <label typeof="password">
                    <input className="form-control" typeof="password" onChange={password.onChange}/>
                </label>
            </form>
            <div className="text-center pb-3">
                doesnt have account? <br/>
                <a href='#' onClick={type.onClick} >register</a>
            </div>
        </div>
    )
}

export default LoginForm;