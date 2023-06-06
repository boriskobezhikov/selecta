import React, { useContext } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import useInput from '../hooks/useInput';
import { AuthContext } from '../App';

function Header(){
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

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
    
    const changeTheme = () => {
        const html = document.documentElement.classList
        if (html.value != 'dark') {
            html.add('dark')
          } else {
            html.remove('dark')
          }
    }

    return (
        <nav className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 place-items-center justify-between lg:justify-normal gap-3 text-xl' > 
            <Link className="col-span-1 lg:col-start-6" to={'/albums'}>albums</Link>
            <Link className="col-span-1" to={'/lists'}>lists</Link>
            <Link to='/' className='col-span-4 md:col-span-2 lg:order-first order-first md:order-none sm:order-first text-4xl '>selecta.</Link>
            <Link className="col-span-1" to={'/about'}>about</Link>
            {auth.auth == false ? (<Link className="col-span-1" to={'/login'}>login</Link>) : (<Link className="col-span-1" to={'/profile'}>profile</Link>) }
            <input className="col-span-full md:col-span-2 md:col-start-3 lg:col-start-10  dark:bg-gray-600 rounded border-black dark:border-gray-400 border-2 p-2 lg:w-full " type="search" placeholder="search..."  onKeyUp={handleSearchSubmit} onChange={search.onChange} />
            <button className='col-span-full  md:col-start-3 md:col-span-1 lg:col-start-12 w-full text-sm' onClick={changeTheme}>
            [switch theme]
            </button>
        </nav>
    )
};


export default Header;