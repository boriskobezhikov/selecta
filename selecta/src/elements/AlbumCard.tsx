import React from 'react';
import { Link } from 'react-router-dom';
import IAlbum from '../IAlbum';



const AlbumCard = (album: IAlbum) => {
    return (
        <Link to={`/album/${album.id}`} className='grid col-span-2 justify-items-center'>
            <img className='col-span-full w-56' src={album.cover} />
            <p className='col-span-full font-bold pt-2'>{album.title}</p>
            <p className='col-span-full'>{album.artist}</p>
        </Link>
    )
}

export default AlbumCard;