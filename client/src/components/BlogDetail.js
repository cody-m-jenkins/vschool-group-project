import React from "react"
// import { withPosts } from "./BlogProvider"

const BlogDetail = props => {
    console.log(props.post)
    let {title, description, author, blogBody, imgUrl, tags, date } = props.post
    return(
        <div>Hello</div>
    )
}


export default BlogDetail