import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { ThemeContext } from '../App';


type loginProps = {
    text: string;
    type: string;
}

const LoginLabel = (props: loginProps) => {
    const theme = useContext(ThemeContext)

    const HandleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue: string =  event.target.value;
        const validType: string = props.type;

        if (validType == 'email') {
            if (!inputValue.includes('@')) {
                event.target.style.backgroundColor = 'pink';
            }
            else {
                event.target.style.backgroundColor = 'white';
            }
        }
        else {
            if(inputValue.trim() === ''){
                event.target.style.backgroundColor = 'pink'
            }
            else {
                event.target.style.backgroundColor = 'white';
            }
        }
    }

    return (
        <div className='container-fluid text-center pb-3 fs-3' style={{color: (theme.theme === 'white' ? 'black' : 'white'), fontWeight: '800'}}>
            {props.text.toUpperCase()}
            <div className='row justify-content-center'>
                <div className='col-sm-10 col-lg-3'> 
                    <input type={props.type} className="form-control" style={{backgroundColor: 'pink'}} placeholder={`type your ${props.text}`} aria-label={`${props.text}`} onChange={HandleInputChange} />
                </div>
            </div>
        </div>
    )
}

export default LoginLabel;