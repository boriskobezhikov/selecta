import React, { useContext } from 'react';
import { ThemeContext } from '../App';

type loginProps = {
    text: string;
}

const LoginButton = (props: loginProps) => {

    const handleInputChange = () => {

    }

    const theme = useContext(ThemeContext)

    return (
        <div className='container-fluid text-center pb-3 fs-3' style={{color: (theme.theme === 'white' ? 'black' : 'white'), fontWeight: '800'}}>
            <button type='submit'>{props.text.toUpperCase()}</button>
        </div>
    )
}

export default LoginButton;