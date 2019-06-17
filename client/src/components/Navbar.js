import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <Link to='/'>Blog</Link>
            <Link to='/about'>About</Link>
            <Link to='/postPage'>Post</Link>
        </div>
    )
}

export default Navbar