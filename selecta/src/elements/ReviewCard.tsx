import React from 'react';
import { Link } from 'react-router-dom';
import IReview from '../IReview';



const ReviewCard = (review: IReview) => {
    return (
        <div className='grid col-span-7 justify-items-start'>
            <p className='col-span-full font-bold'>{review.login}</p>
            <p className='col-span-full'>{review.text}</p>
            <Link to={`/review/${review.id}`} className='blue font-bold col-span-full'> to review...</Link>
        </div>
    )
}

export default ReviewCard;