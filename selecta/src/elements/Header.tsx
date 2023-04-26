import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { ThemeContext } from '../App';

function Header(){
    return (
        <nav className='navbar'>
            <div className='container d-flex flex-lg-wrap mb-5'>
                <div className='me-md-auto order-3 order-md-1 p-2'>
                    <a href="#" className="fs-2" id='brand'>
                        selecta.
                    </a>
                </div>
                <div className='order-2 order-md-1 p-2'>
                    <Link className="nav-link" to={'/albums'}>albums</Link>
                </div>
                <div className='order-2 order-md-3 p-2'>
                    <Link className="nav-link" to={'/lists'}>lists</Link>
                </div>
                <div className='order-4 p-2'>
                    <Link className="nav-link" to={'/about'}>about</Link>
                </div>
                <div className='order-5 p-2'>
                    <Link className="nav-link" to={'/login'}>login</Link>
                </div>
                <div className='order-5 mx-lg-0 p-2'>
                    <input className="form-control" type="text" placeholder="search..." aria-label="search" />
                </div>
                <div className='order-5 p-2'>
                    <ThemeContext.Consumer>
                    {({theme,changeTheme}) => (
                    <a href="#" id="theme" onClick={changeTheme}>[switch theme]</a>
                    )}
                    </ThemeContext.Consumer>
                </div>
            </div>
        </nav>
    )
}


export default Header;