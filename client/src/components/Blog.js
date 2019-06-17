import React from 'react'
import '../css/blog.css'
import FullBlog from './FullBlog';

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='header'>
                <div className='profile-image'>
                    IMG
                </div>
                <h1>Matilda Stupidface</h1>
                <h6>'Long walks off short piers.'</h6>
                <p>[Social Media Component]</p>
            </div>
            <FullBlog />
        </div>
    )
}


export default Blog