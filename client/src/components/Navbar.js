import React from "react"
import { Link } from "react-router-dom"


const Navbar = () => {
    return(
        <div className="navbar">
            <Link to = "./Home">HOME</Link>
            <Link to = "./BlogContainer">POST</Link>
            <Link to = "./About">ABOUT ME</Link>
        </div>
    )
}

export default Navbar