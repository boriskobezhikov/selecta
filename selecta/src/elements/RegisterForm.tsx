import React, { useState } from 'react';
import useInput from '../hooks/useInput';
import useLogType from '../hooks/useLogType';
import useTheme from '../hooks/useTheme';

const RegisterForm = () => {

    const theme = useTheme();
    const type = useLogType();

    const login = useInput('');
    const password = useInput('');
    const email = useInput('');
    const passwordRepeat = useInput('');

    const [valid,setVaild] = useState(false);

    const handleButtonSubmit = () => {
        if (login.validation === false) {
            
        }
    }

    return (
        <div className="text-center fs-3" style={{fontWeight:800}}>
        <form className="text-center">
            <p>LOGIN</p>
            {login.validation != true && 
                <p className='text-danger fs-5'>TYPE SOMETHING!</p>
            }
            <label className="pb-3 pb-3 col-lg-4">
                <input className="form-control" type='text'  onChange={login.onChange}/>
            </label>
            <p>EMAIL</p>
            {email.validation === false && (
                <p className='text-danger fs-5'>WRITE EMAIL, NOT THAT BULLSHIT!</p>
            )}
            <label className="pb-3 pb-3 col-lg-4">
                <input  className="form-control" type="email"  onChange={email.onChange}/>
            </label>
            <p>PASSWORD</p>
            {password.validation === false && (
                <p className='text-danger fs-5'>PASSWORD SHOULD BE MINIMUM 6 LETTERS1</p>
            )}
            <label typeof="password" className="pb-3 pb-3 col-lg-4">
                    <input className="form-control" type="password" onChange={password.onChange}/>
            </label>
            <p>REPEAT PASSWORD</p>
            <label typeof="password" className='pb-3 pb-3 col-lg-4'>
                <input className="form-control" type="password" onChange={passwordRepeat.onChange} />
            </label>
            <br/>
            <button type='button' style={
                    {color: theme.oppColor , 
                    textDecoration: 'none', 
                    backgroundColor: theme.color,
                    }} className=' mt-2 mb-4' >
                    submit
            </button>
        </form>
        <div className="text-center pb-3 fs-5">
                already have account? <br/>
                <a href='#' onClick={type.onClick} >login</a>
            </div>
        </div>
        
    )
}

export default RegisterForm;