import React from 'react'
import '../css/blog.css'
import FullBlog from './FullBlog';

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='header'>
                
            </div>

            <div className='header-info'>
                    <h1>Straussy Van Wiggles</h1>
                    <h6>I'm a coder, yo.</h6>
                    {/* <p>[Social Media Component]</p> */}
            </div>
            <FullBlog />
        </div>
    )
}

export default Blog