import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../elements/Header';
import Footer from '../elements/Footer';
import AlbumInfo from '../elements/AlbumInfo';
import IAlbum from '../IAlbum';

const Album = () => {
    const {id}  = useParams();
    const [album,setAlbum] = useState<IAlbum>();

    const searchUrl = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`
    useEffect( () => {
        const fetchAlbum = async () => {
            const response = await fetch(searchUrl);
            const data = await response.json();
            const album: IAlbum = {
                id:data.id,
                title: data.title,
                cover:data.cover_big,
                artist:data.artist.name,
            }
            setAlbum(album)
            console.log(response)
        }
        fetchAlbum();
    }, [searchUrl]);

    return (
        <div className={`transition gap-x-2 grid grid-rows-7 h-screen grid-cols-4 md:grid-cols-6 lg:grid-cols-12 items-start px-2 py-4 lg:px-16 lg:py-6  dark:bg-black  dark:text-white`}>
          <div className='col-span-full  '>
            <Header />
          </div>
          {album && (
            <div className='col-span-3 lg:col-start-2'>
              <AlbumInfo id={album.id} cover={album.cover} title={album.title} artist={album.artist}  />
            </div>
          )}
          
          <div className='col-span-full self-end justify-self-center '>
            <Footer/>
          </div>
        </div>
      );
} 

export default Album;