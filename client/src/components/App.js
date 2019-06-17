import React from 'react'
import Navbar from './Navbar'
import { Switch, Route } from 'react-router-dom'
import Blog from './Blog'
import About from './About'
import PostPage from './PostPage'

const App = () => {
    return (
        <div className='app-container'>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Blog} />
                <Route path='/about' component={About} />
                <Route path='/postpage' component={PostPage} />
            </Switch>
        </div>
    )
}

export default App