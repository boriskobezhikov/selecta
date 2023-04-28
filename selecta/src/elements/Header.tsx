import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';

function Header(){

    const theme = useContext(ThemeContext);

    const toggleTheme = () => {
    
        if (theme.theme === 'white') {
            theme.setTheme('black');
        }
        else {
            theme.setTheme('white');
        }
        document.body.style.backgroundColor = `${(theme.theme === 'white' ? 'black' : 'white')}`;
    };

    return (
        <nav style={{color: (theme.theme === 'white' ? 'black' : 'white')}} className={'navbar'} > 
            <div className='container d-flex flex-lg-wrap mb-5'>
                <div className='me-md-auto order-3 order-md-1 p-2'>
                    <Link to='/' className='fs-2' style={{color: (theme.theme === 'white' ? 'black' : 'white'), textDecoration: 'none'}}>
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
                <div className='order-5 p-2' onClick={toggleTheme}>
                    <button style={{color: (theme.theme === 'white' ? 'black' : 'white'), textDecoration: 'none', backgroundColor: theme.theme}}>
                    [switch theme]
                    </button>
                </div>
            </div>
        </nav>
    )
};


export default Header;