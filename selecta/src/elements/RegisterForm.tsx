import React, { useContext, useState } from 'react';
import useInput from '../hooks/useInput';
import useLogType from '../hooks/useLogType';
import useTheme from '../hooks/useTheme';
import { AuthContext } from '../App';

const RegisterForm = () => {

    const theme = useTheme();
    const type = useLogType();
    const auth = useContext(AuthContext);

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
                    auth.setAuth(true);
                    console.log(response.json());
                }
            });
        }
    }

    return (
        <div className="text-center fs-3" style={{fontWeight:800}}>
        <form className="text-center">
            <p>LOGIN</p>
            {!login.validation && <p className='fs-6 mt-2 text-danger' style={{fontWeight:400}}>login is empty</p>}
            <label className="pb-3 pb-3 col-lg-4">
                <input className="form-control" type='text'  onChange={login.onChange}/>
            </label>
            <p>EMAIL</p>
            {!email.validation && <p className='fs-6 mt-2 text-danger' style={{fontWeight:400}}>wrond email format</p>}
            <label className="pb-3 pb-3 col-lg-4">
                <input  className="form-control" type="email"  onChange={email.onChange}/>
            </label>
            <p>PASSWORD</p>
            {!password.validation && <p className='fs-6 mt-2 text-danger' style={{fontWeight:400}}>password is empty or less than 6 letters</p>}
            <label typeof="password" className="pb-3 pb-3 col-lg-4">
                    <input className="form-control" type="password" onChange={password.onChange}/>
            </label>
            <p>REPEAT PASSWORD</p>
            {password.value != passwordRepeat.value && <p className='fs-6 mt-2 text-danger' style={{fontWeight:400}}>password doesnt match</p>}
            <label typeof="password" className='pb-3 pb-3 col-lg-4'>
                <input className="form-control" type="password" onChange={passwordRepeat.onChange} />
            </label>
            <br/>
            <button type='button' style={
                    {color: theme.oppColor , 
                    textDecoration: 'none', 
                    backgroundColor: theme.color,
                    }} className=' mt-2 mb-4' onClick={handleSubmit}>
                    submit
            </button>
        </form>
        {!valid && <p className='fs-6 mt-2 text-danger' style={{fontWeight:400}}>something is wrong :(</p>}
        <div className="text-center pb-3 fs-5">
                already have account? <br/>
                <a href='#' onClick={type.onClick} >login</a>
            </div>
        </div>
        
    )
}

export default RegisterForm;