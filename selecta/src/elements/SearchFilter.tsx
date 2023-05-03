import React from 'react';

const SearchFilter = () => {
    return (
        <div className='grid grid-cols-1 gird-rows-5 justify-items-center'>
            <div className='text-lg font-bold'>SEARCH RESULTS FOR</div>
            <div className=' hover:bg-slate-300'>albums</div>
            <div className=' hover:bg-slate-300'>reviews</div>
            <div className=' hover:bg-slate-300'>lists</div>
            <div className=' hover:bg-slate-300'>users</div>
        </div>
    )
}

export default SearchFilter;