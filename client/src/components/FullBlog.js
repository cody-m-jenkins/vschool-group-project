import React, { Component } from 'react'
import BlogCard from './BlogCard'
import '../css/full-blog.css'

class FullBlog extends Component {
    render() {
        return (
            <div className='full-blog-container'>
                <h2>Blog Entries:</h2>
                <BlogCard />
            </div>
        )
    }
}

export default FullBlog