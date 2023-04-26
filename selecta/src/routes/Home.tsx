import React from 'react';
import Header from '../elements/Header';
import './Home.css'
import Footer from '../elements/Footer';
import { ThemeContext } from '../App';

function Home(){
    return (
        <div id='homepage'>
            <Header />
            <div className='container text-center mt-3 mb-3 '>
                    <span className='fs-2'>
                    rate albums you love<br/>
                    argue with others about them<br/>
                    make lists for your friends <br />
                    be the person with the most <br />
                    </span>
                    <span className='fst-italic' id='taste'>
                        "unique taste"))) 
                    </span>
            </div>
            <div className='container text-center'>
                <img src={require("../routes/albums.gif")} alt="gif" id='albums'/>
            </div>
            <div className='text-center mt-5 pb-4'>
                <a href='#'className='button p-3 shadow-lg fs-2'>
                    [GOGOGO]
                </a>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;