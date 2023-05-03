import React, { useContext, useState } from 'react';
import useInput from '../hooks/useInput';
import useTheme from '../hooks/useTheme';
import { AuthContext } from '../App';
import { redirect } from 'react-router-dom';

function LoginForm(){ 
    const auth = useContext(AuthContext);
    
    const [valid,setVaild] = useState(true);
    const login = useInput('');
    const password = useInput('');
    

    const handleSubmit = async () => {
        const url: string = 'http://localhost:5000/auth/login';

        if(!login.validation || !password.validation) {
            setVaild(false)
        }
        else {
            try {
                await fetch( url, {
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
                    setVaild(true);
                    response.json().then((data) => {
                        auth.setKey(data.access_token);
                        console.log(auth.key);
                    })
                }
                else {
                    setVaild(false);
                }
            });
        }
        catch {
            setVaild(false);
        }
        }
    }

    return (
        <form className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 grid-rows-7 justify-items-center self-start '>
            <p className='col-span-full font-bold text-xl'>LOGIN</p>
            {!login.validation && <p className='col-span-full text-red-600 mt-4'>login is empty</p>}
            <label className="col-span-full lg:col-start-5 lg:col-span-4 px-6 w-full  pb-3 pt-2 col-lg-4">
                <input className="border-black w-full border-2 rounded px-4 py-1 font-light" type="text" onChange={login.onChange}/>
            </label>
            <p className='col-span-full font-bold text-xl'>PASSWORD</p>
            {!password.validation && <p className='col-span-full text-red-600 mt-4'>password is empty or less than 6 letters</p>}
            <label typeof="password" className="col-span-full lg:col-start-5 lg:col-span-4 px-6 w-full pt-2 pb-3 col-lg-4">
                <input className="border-black w-full border-2 rounded px-4 py-1"type="password" onChange={password.onChange}/>
            </label>
            <br/>
            {!valid && <p className='col-span-full text-red-600 mt-4'>wrong login or password :(</p>}
            <button type='button' className='col-span-full font-bold text-xl' onClick={handleSubmit}>
                submit
            </button>
        </form>
        /* <div className="text-center pb-3 fs-5">
            doesnt have account? <br/>
            <a href='#' style={{color:'blue'}}onClick={type.onClick} >register</a>
        </div> */

)}

export default LoginForm;