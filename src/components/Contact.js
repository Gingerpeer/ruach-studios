import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Nav from './Nav'
import Footer from './Footer'

const Contact = () =>{
    return(
            <div id='ContactDetails'>
                <Nav />
            
                        <h1 className='text-center text-dark'>Contact Us</h1>
                        <div className='card p-3 bg-info' style={{ maxWidth: '50%', marginLeft: '25%' }}>
                        <p className='text-center text-light' ><a className='text-light' href='mailto:pierre@ruachstudios.co.za'>pierre@ruachstudios.co.za</a> or follow us at the following social platforms.</p>
                        </div>
                        
                        <div className='text-center'>
                            <SocialIcon className='btn-lg m-2' url='https://twitter.com/RuachStudios' />
                            <SocialIcon className='btn-lg m-2' url='https://www.facebook.com/RuachZA' />
                            <SocialIcon className='btn-lg m-2' url='https://www.linkedin.com/in/pierre-van-zyl-3a1413b8' />
                        
                    </div>
                <Footer/>
            </div>
    );
}
export default Contact;