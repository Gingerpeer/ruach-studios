import React from 'react';
import Nav from './Nav'
import Footer from './Footer'

const About = () => {
    return(
        <React.StrictMode>
            <div id="aboutDetails" className='Style text-dark'>
                <Nav />
                <div id='about' className='pt-5 mt-5'>
                <h1 className='text-center'>About Us</h1>
                    <p className='card p-4 text-light bg-info'>Ruach Studios is a software development agency founded by Pierre van Zyl also known as <a className='text-info' href='https://gingerpeer.com' target='_blank' rel='noopener noreferrer'>Gingerpeer</a> online. The heart of this agency is to create high quality products that are designed with the end-user experience in mind. We want the design of our products to be soothing a satisfying, whilst not compromising on processing speed and security of our applications. We are truly a full-stack agency with specialists in each field to produce the highest quality of products.</p>
                    <p className='card p-2 text-dark text-center' style={{ backgroundColor: "#dee2e6" }}>Although software engineering is our main field of expertise, Ruach Studios also has contracted experts in the following fields to provide our customers with the best experience.</p>
            <div className='card p-2 text-dark text-center font-italic font-weight-bolder' style={{ backgroundColor: "#dee2e6"}}>
                <p>Design</p>
                <p>Digital Marketing</p>
                <p>Digital Administrative Assistants</p>
            </div>
            </div>
            <Footer/>
    </div>
        </React.StrictMode>
    );
}
export default About;
