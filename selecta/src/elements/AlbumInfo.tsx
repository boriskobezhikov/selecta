import React from 'react';
import { Link } from 'react-router-dom';
import IAlbum from '../IAlbum';


const AlbumInfo = (album: IAlbum) => {
    return (
        <div className='grid grid-cols-1 justify-items-center'>
            <img className='col-span-full' src={album.cover} />
            <p className='col-span-full font-bold pt-2 text-2xl text-bold'>{album.title}</p>
            <p className='col-span-full'>{album.artist}</p>
            <button className='col-span-full font-bold text-xl text-blue-600'>WRITE REVIEW</button>
        </div>
    )
}

export default AlbumInfo;