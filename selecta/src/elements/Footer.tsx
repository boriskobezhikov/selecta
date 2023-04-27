import React, { useContext } from 'react';
import './Footer.css'
import { ThemeContext } from '../App';

function Footer(){
    const theme = useContext(ThemeContext)
    return (
        <div className={'container-fluid'}>
        <footer className="text-center fs-5 text-danger">
        DONE BY @BIGDICCGORILLA2007@GMAIL.COM
        </footer>
        </div>
    )
}

export default Footer;