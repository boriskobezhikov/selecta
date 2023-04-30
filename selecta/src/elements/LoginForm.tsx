import React from 'react';
import useInput from '../hooks/useInput';
import useLogType from '../hooks/useLogType';
import useTheme from '../hooks/useTheme';

function LoginForm(){
    const theme = useTheme();
    
    const type = useLogType();
    const login = useInput('');
    const password = useInput('');
    

    return (
        <div className=" text-center fs-3" style={{fontWeight:800}}>
            <form className=''>
                <p>LOGIN</p>
                <label className="pb-3 col-lg-4">
                    <input className="form-control" type="text" onChange={login.onChange}/>
                </label>
                <p>PASSWORD</p>
                <label typeof="password" className="pb-3 col-lg-4">
                    <input className="form-control" type="password" onChange={password.onChange}/>
                </label>
                <br/>
                <button type='button' style={
                    {color: theme.oppColor , 
                    textDecoration: 'none', 
                    backgroundColor: theme.color,
                    }} className='mb-4'>
                    submit
                </button>
            </form>
            <div className="text-center pb-3 fs-5">
                doesnt have account? <br/>
                <a href='#' style={{color:'blue'}}onClick={type.onClick} >register</a>
            </div>
        </div>
    )
}

export default LoginForm;