import React from 'react';
import { Link } from 'react-router-dom';
import IReview from '../IReview';



const ReviewCard = (review: IReview) => {
    return (
        <div className='grid col-span-7 justify-items-start mt-4'>
            <p className='col-span-full font-bold text-xl'>{review.login}</p>
            <p className='col-span-full text-lg'>{review.text}</p>
            <Link to={`/review/${review.id}`} style={{color:'blue'}} className=' col-span-full'> to review...</Link>
        </div>
    )
}

export default ReviewCard;