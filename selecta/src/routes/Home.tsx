import React from 'react';
import Header from '../elements/Header';
import Footer from '../elements/Footer';
import { Link } from 'react-router-dom';
import useTheme from '../hooks/useTheme';


function Home(){
    const theme = useTheme();

    return (
        <div className='transition grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12  items-start px-2 py-4 lg:px-16 lg:py-6 h-screen   dark:bg-black  dark:text-white'>
            <div className='col-span-full'>
            <Header />
            </div>
            <div className='lg:row-span-2 lg:col-start-3 col-span-full md:col-span-6 lg:col-span-4 self-center'>
                <p className='text-lg lg:text-4xl font-bold text-center'>
                    rate albums you love<br/>
                    argue with others about them<br/>
                    make lists for your friends <br />
                    be the person with the most <br />
                    <p className='text-xl lg:text-6xl font-bold'>
                        "unique taste"))) 
                    </p>
                </p>
            </div>
           
                <img  src={require("../routes/albums.gif")} className='lg:row-span-2 pt-12 lg:pt-0 col-span-full lg:col-span-4 self-center  justify-self-center' alt="gif"/>
                {/* <Link to='/login' className=' place-self-center self-center border-2 border-black p-3 mt-24 text-2xl'>
                [GOGOGO]
                </Link> */}

            <div className='col-span-full self-end justify-self-center '>
            <Footer/>
            </div>
        </div>
    );
}

export default Home;