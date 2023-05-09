import React from 'react';
import { Link, useParams } from 'react-router-dom';
import IAlbum from '../IAlbum';
import WriteReview from './WriteReview';


const AlbumInfo = (album: IAlbum) => {

    return (
        <div className='grid grid-cols-1 justify-items-center'>
            <img className='col-span-full' src={album.cover} />
            <p className='col-span-full font-bold pt-2 text-2xl text-bold'>{album.title}</p>
            <p className='col-span-full'>{album.artist}</p>
            <WriteReview />
        </div>
    )
}

export default AlbumInfo;