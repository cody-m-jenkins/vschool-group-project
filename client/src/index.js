import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import './css/app.css'
import BlogProvider from "./components/BlogProvider"

ReactDom.render(
    <BrowserRouter>
        <BlogProvider>
            <App />
        </BlogProvider>
    </BrowserRouter>, document.getElementById('root'))