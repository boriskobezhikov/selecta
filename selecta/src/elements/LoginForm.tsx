import React, { useContext } from 'react';
import { ThemeContext } from '../App';

type loginProps = {
    text: string;
}

const LoginForm = (props: loginProps) => {

    const handleInputChange = () => {

    }

    const theme = useContext(ThemeContext)

    return (
        <div className='container-fluid text-center pb-3 fs-3' style={{color: (theme.theme === 'white' ? 'black' : 'white'), fontWeight: '800'}}>
            {props.text.toUpperCase()}
            <div className='row justify-content-center'>
                <div className='col-sm-10 col-lg-3'> 
                    <input className="form-control" type="text" placeholder={`type your ${props.text}`} aria-label={`${props.text}`} onChange={handleInputChange} />
                </div>
            </div>
        </div>
    )
}

export default LoginForm;