import React, { useContext} from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../App';
import useTheme from '../hooks/useTheme';
import useInput from '../hooks/useInput';

function Header(){
    const navigate = useNavigate();
    
    const theme = useTheme();
    const search = useInput('');
    const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key ==='Enter') {
        console.log(navigate(`/search/${search.value}`));
        navigate(`/search/album/${search.value}`);
        }
        else {
            console.log(e.key);
        }
    }

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
                    <input className="form-control" type="text" placeholder="search..." aria-label="search" onKeyUp={handleSearchSubmit} onChange={search.onChange} />
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