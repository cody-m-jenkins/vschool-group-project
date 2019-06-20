import React from 'react'
import '../css/blog-card.css'
import { withPosts } from "./BlogProvider"

const BlogCard = (props) => {
    console.log(props)
        let {title, description, author, blogBody, imgUrl, tags, date } = props.post
        return(
            <div className='blog-card-container'>
                {/* <div width= "100pt" height="150pt" background={imgUrl}> */}
                    <img src={imgUrl} alt="blog post"/>
                {/* </div> */}


                <h1>{title}</h1>
                <h3>{description}</h3>
                <h3>{blogBody}</h3>
                <h5>{tags}</h5>
                <h5>{date}</h5>
                <h5>{author}</h5>
                
            </div>
   )
}

export default withPosts(BlogCard)