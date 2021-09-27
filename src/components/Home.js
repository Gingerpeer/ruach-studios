import React from 'react';
import Nav from './Nav'
import Footer from './Footer'

const Home = () => {
    return(
        <div id='Home' className='pt-5 mt-5 text-dark'>
            <Nav />
                <h1 className='text-center'>Welcome to <br/>Ruach Studios</h1>
                <p className='card p-4 text-light bg-info'>Ruach Studios is a Software Development and Design Studio with a passion for creating beautiful user-friendly products, all with a strong backbone in security and digital marketing.
                We believe that it is possible to have your personal information protected without losing ease of use, productivity and efficiency, and this is exactly what our technology aims to provide.
                We Specialize in the development of Web and Mobile Application both on the front-end and the back-end.
                </p>
                <h2 className='text-center'>Testimonials</h2>
                <ul className='text-center p-2'>
                    <li className='card p-2 text-dark' style={{ backgroundColor: "#dee2e6" }}>"Really punctual. Pierre(CEO) gives great feedback and added a lot of creativity and value to my project., I will definitely will be hiring him back in the near future." - Jeffrey Reed</li>
                    <br/>
                    <li className='card p-2 text-dark' style={{ backgroundColor: "#dee2e6" }}>"Great work ethic! Will definitely use them again." - Kobus van Zyl</li>
                </ul>
                <div id='portfolio'>
                    <h2 className='text-center'>Portfolio</h2>
                    <iframe className='card p-2 pb-5' src='https://www.avantgarde2332.com/' title='Gingerpeer Web App' width='100%' height='500px' />
                    <iframe className='card p-2 pb-5' src='https://gingerpeer.com/' title='Gingerpeer Web App' width='100%' height='500px' />
                    <iframe className='card p-2 pb-5' src='http://www.knysnabaptist.org.za/' title='Gingerpeer Web App' width='100%' height='500px' />
                </div>
            <Footer />
        </div>
    );
}
export default Home;