import React, { Component } from 'react'
import axios from 'axios'
import '../css/post-page.css'

class PostPage extends Component {
        constructor() {
            super()
            this.state={
                title: '',
                description: '',
                author: '',
                blogBody: '',
                imgUrl: '',
                tags: '',
                date: ''
            }
        }
        
        onChange = (e) => {
            this.setState({ [e.target.name]: e.target.value})
        }

        onSubmit = (e) => {
            e.preventDefault()
            const {title, description, author, blogBody, imgUrl, tags, date} = this.state

            axios.post('/blogs/', {title, description, author, blogBody, imgUrl, tags, date }).then((result) => {
                    console.log("Posted successfully")
            })
        }
 
    render() {
        const { title, description, author, blogBody, imgUrl, tags, date } = this.state
        return (
            <div className='post-page-container'>
                <form onSubmit={this.onSubmit}>
                    <div className='input-container'>
                        <label>Post Title:</label>
                        <input 
                        className='input-title' 
                        required type='string' 
                        name='title' 
                        value={title} 
                        onChange={this.onChange}
                        placeholder='100 Characters' />
                    </div>

                    <div className='input-container'>
                        <label>Desc:</label>
                        <textarea 
                        rows='4' cols='50' 
                        className='input-description' 
                        required type='string' 
                        name='description'
                        value={description}
                        onChange={this.onChange}
                        placeholder='Post Description'></textarea>
                    </div>

                    <div className='input-container'>
                        <label>Author:</label>
                        <input 
                        className='input-author' 
                        required type='string' 
                        name='author' 
                        value={author}
                        onChange={this.onChange}
                        placeholder='Post Author' />
                    </div>

                    <div className='input-container'>
                        <label>Date:</label>
                        <input 
                        className='input-blogDate' 
                        type='string' 
                        name='date' 
                        value={date}
                        onChange={this.onChange}
                        placeholder='Date' />
                    </div>
                    
                    <div className='input-container'>
                        <label>Tags:</label>
                        <input 
                        className='input-blogTags' 
                        type='string' 
                        name='tags' 
                        value={tags}
                        onChange={this.onChange}
                        placeholder='Tags' />
                    </div>

                    <div className='input-container'>
                        <label>Image URL:</label>
                        <input 
                        className='input-blogImgUrl' 
                        type='string' 
                        name='imgUrl' 
                        value={imgUrl}
                        onChange={this.onChange}
                        placeholder='Image URL' />
                    </div>

                    <div className='input-container'>
                        <label>Body:</label>
                        <textarea 
                        rows="4" cols="50" 
                        className='input-body' 
                        required type='string' 
                        name='blogBody'
                        value={blogBody}
                        onChange={this.onChange}
                        ></textarea>
                    </div>
                    <button type='submit'>Submit</button>
                </form>

            </div>
        )    
    }
}


export default PostPage