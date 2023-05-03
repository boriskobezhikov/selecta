import React from 'react';

type IalbumInfo = {
    cover: string;
    title: string;
    author: string;
}

const AlbumCard = (albumInfo: IalbumInfo) => {
    return (
        <div className='grid col-span-2 justify-items-center'>
            <img className='col-span-full w-56' src={albumInfo.cover} />
            <p className='col-span-full font-bold pt-2'>{albumInfo.title}</p>
            <p className='col-span-full'>{albumInfo.author}</p>
        </div>
    )
}

export default AlbumCard;