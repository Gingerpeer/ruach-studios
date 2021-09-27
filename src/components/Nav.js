import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  
     return(
        <div>
            <nav className='nav fixed-top justify-content-center w-100 p-2 bg-dark row'>

                <Link className='btn text-light' to='/'>Home</Link>
                <Link className='btn text-light' to='/about'>About Us</Link>
                <Link className='btn text-light' to='/blogs'>Blogs</Link>    
                <Link className='btn text-light' to='/contact'>Contact Us</Link>
                <Link className='btn text-info' to='/login'>Login</Link>
                       
                
            </nav>
        </div>
    );
}
export default Nav