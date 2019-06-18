import React from 'react'
import '../css/post-page.css'

const PostPage = () => {
    return (
        <div className='post-page-container'>
            <div className='post-page-container-title'>
                <h3>Title of your blog post (recommended 100 characters or less): </h3>
                <input required type='string' name='blogTitle'/>
            </div>
            <div className='post-page-container-description'>
                <h3>Description of the blog post (recommended 300 characters or less): </h3>
                <input required type='string' name='blogDescription'/>
            </div>
            <div className='post-page-container-author'>
                <h3>Names of the author(s) who have contributed to the blog post:</h3>
                <input required type='string' name='blogAuthor'/>
            </div>
            <div className='post-page-container-body'>
                <h3>The body of your blog post:</h3>
                <input required type='string' name='blogBody'/>
            </div>
            <div className='post-page-container-blogImgUrl'>
                <h3>URL of the thumbnail image for your post (optional):</h3>
                <input type='string' name='blogImgUrl'/>
            </div>
            <div className='post-page-container-blogTags'>
                <h3>Tags for your post (optional):</h3>
                <input type='string' name='blogTags'/>
            </div>
            <div className='post-page-container-blogDate'>
                <h3>Date of the post:</h3>
                <input type='string' name='blogDate'/>
            </div>
        </div>
    )
}

export default PostPage