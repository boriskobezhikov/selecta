import React, { useContext, useState } from 'react';
import useInput from '../hooks/useInput';
import useLogType from '../hooks/useLogType';
import useTheme from '../hooks/useTheme';
import { AuthContext } from '../App';
import { redirect } from 'react-router-dom';

function LoginForm(){
    const theme = useTheme();
    
    const auth = useContext(AuthContext);
    
    const [valid,setVaild] = useState(true);
    const type = useLogType();
    const login = useInput('');
    const password = useInput('');
    

    const handleSubmit = async () => {
        const url: string = 'http://localhost:5000/auth/login';

        if(!login.validation || !password.validation) {
            setVaild(false)
        }
        else {
            const response = await fetch( url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    login: login.value, 
                    password: password.value, 
                }),
            }).then((response) => {
                if (response.status == 201 || response.status == 200) {
                    auth.setAuth(true);
                    response.json().then((data) => {
                        auth.setKey(data.access_token);
                        console.log(auth.key);
                    })
                }
            });
        }
    }

    return (
        <div className=" text-center fs-3" style={{fontWeight:800}}>
            <form className=''>
                <p>LOGIN</p>
                {!login.validation && <p className='fs-6 mt-2 text-danger' style={{fontWeight:400}}>login is empty</p>}
                <label className="pb-3 col-lg-4">
                    <input className="form-control" type="text" onChange={login.onChange}/>
                </label>
                <p>PASSWORD</p>
                {!password.validation && <p className='fs-6 mt-2 text-danger' style={{fontWeight:400}}>password is empty or less than 6 letters</p>}
                <label typeof="password" className="pb-3 col-lg-4">
                    <input className="form-control" type="password" onChange={password.onChange}/>
                </label>
                <br/>
                <button type='button' style={
                    {color: theme.oppColor , 
                    textDecoration: 'none', 
                    backgroundColor: theme.color,
                    }} className='mb-4' onClick={handleSubmit}>
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