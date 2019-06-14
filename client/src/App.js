import React from "react"
import Home from "./Home"
import BlogPost from "./BlogPost"
import Footer from "./Footer";
import Navbar from "./Navbar"
import {Switch, Route} from "react-router-dom"



const App = () => {
    return(
        <div>
            <Navbar />
                <Switch>
                        <Route exact path= "/" component={Home} />
                        <Route path= "/blogPost" component={BlogPost} />
                        <Route path= "/footer" component={Footer} />
                </Switch>
            <Footer />
        </div>
    )
}

export default App