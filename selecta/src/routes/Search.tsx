import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../elements/Footer';
import Header from '../elements/Header';
import useTheme from '../hooks/useTheme';
import AlbumCard from '../elements/AlbumCard';
import SearchFilter from '../elements/SearchFilter';

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
        <div className='transition grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 md:h-screen  items-start px-2 py-4 lg:px-16 lg:py-6    dark:bg-black  dark:text-white'>
           <div className='col-span-full  '>
                <Header />
            </div>
            <div className='pt-24 col-span-8 col-start-2 gap-6 place-items-center grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8'>
            {items.map(item => (
                <AlbumCard cover={item.cover_big} title={item.title} author={item.artist.name} />
            // <div className='row-span-2 col-span-2 text-center'>
            //     <p>{item.title}</p>
            //     <img src={item.cover} />
            //     </div>
            ))}
            </div>
            <div className='pt-24 col-span-2'>
                <SearchFilter />
            </div>
            <div className='col-span-full self-end justify-self-center '>
            <Footer/>
            </div>
        </div>
    );
}

export default Search;
