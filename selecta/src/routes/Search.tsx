import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../elements/Footer';
import Header from '../elements/Header';
import useTheme from '../hooks/useTheme';

const Search = () => {
    const {type,value}  = useParams();
    const [items, setItems] = useState<any[]>([]);

    const searchUrl = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/${type}?q=${value}`
    const theme = useTheme();

    useEffect(() => {
        const response = fetch(searchUrl, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(
            (result) => {
                setItems(result.data)
            }
        );
        console.log(items);
    }, [searchUrl]);


    return (
        <div className={'text-' + theme.oppColor}>
            <Header />
            <div className='row'>
            {items.map(item => (
            <div className='col-2'>
                <p>{item.title}</p>
                <img src={item.cover} />
                </div>
            ))}
            </div>
            <Footer />
        </div>
    );
}

export default Search;
