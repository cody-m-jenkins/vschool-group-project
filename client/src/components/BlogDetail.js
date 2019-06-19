import React from "react"
import { withPosts } from "./BlogProvider"

const BlogDetail = (props => {
    let {title, description, author, blogBody, imgUrl, tags, date } = props.postInfo
})


export default withPosts(BlogDetail)