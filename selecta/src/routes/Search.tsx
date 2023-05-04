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
    const [loading, setLoading] = useState(true);

    const searchUrl = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/${type}?q=${value}`

    const theme = useTheme();

    useEffect(() => {
        setLoading(true);
        const response = async () => await fetch(searchUrl, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(
            (result) => {
                const albums = result.data
                setItems(result.data)
                setLoading(false);
            }
        );
        response();
        
    }, [searchUrl]);


    return (
        <div className={`transition gap-x-2 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 items-start px-2 py-4 lg:px-16 lg:py-6  ${(items.length < 8) || (loading) ? 'h-screen' : ''} dark:bg-black  dark:text-white`}>
           <div className='col-span-full  '>
                <Header />
            </div>


            {!loading ? ( <div className='pt-24 col-span-8 col-start-2 gap-6 place-items-center grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8'>
                {items.map(item => (
                    <>
                    <AlbumCard id={item.id} cover={item.cover_big} title={item.title} artist={item.artist.name} />
                    </>
                ))}
            </div>) : (
                <div className='col-span-full place-self-center'>loading...</div>
            )}

            {!loading && <div className='pt-24 col-span-2'>
                <SearchFilter />
            </div>}

            <div className='col-span-full self-end justify-self-center '>
            <Footer/>
            </div>
        </div>
    );
}

export default Search;
