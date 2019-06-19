import React, { Component } from 'react'
import axios from 'axios'
import '../css/post-page.css'

class PostPage extends Component {
        constructor() {
            super()
            this.state={
                blogTitle:''
            }
        }
        
        onChange = (e) => {
            this.setState({ [e.target.name]: e.target.value})
        }

        onSubmit = (e) => {
            e.preventDefault()
            const {blogTitle} = this.state

            axios.post('/', {blogTitle}).then((result) => {
                    console.log('the post worked')
            })
        }
 
    render() {
        const { blogTitle } = this.state
        return (
            <div className='post-page-container'>
                <form onSubmit={this.onSubmit}>
                    <div className='input-container'>
                        <label>Post Title:</label>
                        <input 
                        className='input-title' 
                        required type='string' 
                        name='blogTitle' 
                        value={blogTitle} 
                        onChange={this.onChange}
                        placeholder='100 Characters' />
                    </div>

                    <div className='input-container'>
                        <label>Desc:</label>
                        <textarea 
                        rows='4' cols='50' 
                        className='input-description' 
                        required type='string' 
                        name='blogDescription' 
                        placeholder='Post Description'></textarea>
                    </div>

                    <div className='input-container'>
                        <label>Author:</label>
                        <input 
                        className='input-author' 
                        required type='string' 
                        name='blogAuthor' 
                        placeholder='Post Author' />
                    </div>

                    <div className='input-container'>
                        <label>Date:</label>
                        <input 
                        className='input-blogDate' 
                        type='string' 
                        name='blogDate' 
                        placeholder='Date' />
                    </div>
                    
                    <div className='input-container'>
                        <label>Tags:</label>
                        <input 
                        className='input-blogTags' 
                        type='string' 
                        name='blogTags' 
                        placeholder='Tags' />
                    </div>

                    <div className='input-container'>
                        <label>Image URL:</label>
                        <input 
                        className='input-blogImgUrl' 
                        type='string' 
                        name='blogImgUrl' 
                        placeholder='Image URL' />
                    </div>

                    <div className='input-container'>
                        <label>Body:</label>
                        <textarea 
                        rows="4" cols="50" 
                        className='input-body' 
                        required type='string' 
                        name='blogBody'
                        ></textarea>
                    </div>
                    <button type='submit'>Submit</button>
                </form>

            </div>
        )    
    }
}


export default PostPage