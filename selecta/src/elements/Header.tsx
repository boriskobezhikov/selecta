import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';
import useTheme from '../hooks/useTheme';

function Header(){

    const theme = useTheme();

    return (
        <nav style={{color: theme.oppColor}} className={'navbar'} > 
            <div className='container d-flex flex-lg-wrap mb-5'>
                <div className='me-md-auto order-3 order-md-1 p-2'>
                    <Link to='/' className='fs-2' style={{color: theme.oppColor, textDecoration: 'none'}}>
                        selecta.
                    </Link>
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
                <div className='order-5 p-2' onClick={theme.onClick}>
                    <button style={{color: theme.oppColor , textDecoration: 'none', backgroundColor: theme.color}}>
                    [switch theme]
                    </button>
                </div>
            </div>
        </nav>
    )
};


export default Header;