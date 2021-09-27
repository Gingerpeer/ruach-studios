import React from 'react';
import Nav from "./Nav";
import Footer from "./Footer";

const Blogs = () => {
  return(
    <div>
      <Nav />
      <div>
        <h1 className="text-center">Blogs</h1>
        <div className="card-body text-center bg-info text-light">
          <h3>Our First Blog</h3>
          <p>This is our first blog, we hope you enjoy getting to know us a bit better.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Blogs;