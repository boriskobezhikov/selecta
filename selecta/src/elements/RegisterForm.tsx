import React, { useState } from 'react';
import useInput from '../hooks/useInput';


const RegisterForm = () => {


    const login = useInput('');
    const password = useInput('');
    const email = useInput('');
    const passwordRepeat = useInput('');

    const [valid,setVaild] = useState(true);

    const handleSubmit = async () => {
        const url: string = 'http://localhost:5000/users';

        if(!login.validation || !email.validation || !password.validation) {
            setVaild(false)
        }
        else {
            setVaild(true);
            const response = await fetch( url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    login: login.value, 
                    password: password.value, 
                    email: email.value}),
            }).then((response) => {
                if (response.status == 201 || response.status == 200) {
                    console.log(response.json());
                }
            });
        }
    }

    return (
        <form className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 grid-rows-7 justify-items-center self-start '>
            <p  className='col-span-full font-bold text-xl'>LOGIN</p>
            {!login.validation && <p className='col-span-full text-red-600 mt-4'>login is empty</p>}
            <label className="col-span-full lg:col-start-5 lg:col-span-4 px-6 w-full  pb-3 pt-2 col-lg-4">
                <input className="border-black w-full border-2 rounded px-4 py-1 font-light" type='text'  onChange={login.onChange}/>
            </label>
            <p  className='col-span-full font-bold text-xl'>EMAIL</p>
            {!email.validation && <p className='col-span-full text-red-600 mt-4' >wrond email format</p>}
            <label className="col-span-full lg:col-start-5 lg:col-span-4 px-6 w-full  pb-3 pt-2 col-lg-4">
                <input  className="border-black w-full border-2 rounded px-4 py-1 font-light" type="email"  onChange={email.onChange}/>
            </label>
            <p  className='col-span-full font-bold text-xl'>PASSWORD</p>
            {!password.validation && <p className='col-span-full text-red-600 mt-4'>password is empty or less than 6 letters</p>}
            <label typeof="password" className="col-span-full lg:col-start-5 lg:col-span-4 px-6 w-full  pb-3 pt-2 col-lg-4">
                    <input className="border-black w-full border-2 rounded px-4 py-1 font-light" type="password" onChange={password.onChange}/>
            </label>
            <p  className='col-span-full font-bold text-xl'>REPEAT PASSWORD</p>
            {password.value != passwordRepeat.value && <p className='col-span-full text-red-600 mt-4'>password doesnt match</p>}
            <label typeof="password" className="col-span-full lg:col-start-5 lg:col-span-4 px-6 w-full  pb-3 pt-2 col-lg-4">
                <input className="border-black w-full border-2 rounded px-4 py-1 font-light" type="password" onChange={passwordRepeat.onChange} />
            </label>
            <br/>
            {!valid && <p className='col-span-full text-red-600 mt-4'>something is wrong :(</p>}
            <button type='button' className='col-span-full font-bold text-xl' onClick={handleSubmit}>
                submit
            </button>
        </form>
        
    )
}

export default RegisterForm;