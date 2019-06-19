import React from 'react'
import BlogCard from './BlogCard'
import '../css/full-blog.css'
import { withPosts } from "./BlogProvider"

const FullBlog = props => {
  
        const mappedPosts = props.posts.map((post, i) => <BlogCard key = {i + post.name } post={post}/>)
        return (
            <div className='full-blog-container'>
                <h2>Blog Entries:</h2>
                { mappedPosts }
            </div>
        )
}

export default withPosts(FullBlog)