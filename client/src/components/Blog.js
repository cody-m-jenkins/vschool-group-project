import React from 'react'
import '../css/blog.css'
import FullBlog from './FullBlog';

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='header'>
                <img src='https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='shit' />
            </div>

            <div className='header-info'>
                    <h1>eat-sleep-code-repeat</h1>
                    <h6>We're coders!</h6>
                    {/* <p>[Social Media Component]</p> */}
            </div>
            <FullBlog />
        </div>
    )
}


export default Blog