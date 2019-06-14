import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import BlogProvider from "./components/BlogProvider"
import App from "./components/App"
import styles from "./css/index.css"

ReactDOM.render(
    <BrowserRouter>
        {/* <BlogProvider> */}
            <App />
        {/* </BlogProvider>  */}
    </BrowserRouter>, document.getElementById('root')
)

