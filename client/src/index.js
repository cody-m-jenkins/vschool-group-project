import React from "react"
import ReactDOM from "react-dom"
import BrowserRouter from "react-router-dom"
import BlogProvider from "./BlogProvider"

ReactDOM.render(
    <BrowserRouter>
        <BlogProvider>
            <App />
        </BlogProvider> 
    </BrowserRouter>, document.getElementById('root')
)

