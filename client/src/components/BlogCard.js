import React from 'react'
import '../css/blog-card.css'
import { withPosts } from "./BlogProvider"
import BlogDetail from "./BlogDetail"

const BlogCard = (props) => {
    // console.log(props)
        const mappedPosts = props.posts.map((post, i) => <BlogDetail key = {i } post={post}/>)
            return (
                <div className='blog-card-container'>
                    <div className='post-image'>

                    </div>
                    { mappedPosts }
                    <div className='post-intro'>
                        <h3 className='post-title'>California Should Fall Off</h3>
                    </div>
                 </div>
   )
}

 


export default withPosts(BlogCard)