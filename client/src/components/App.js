import React from "react"

const App = () => {
    return(
        <Navbar />
            <Switch>
                {/* <div> */}
                    <Route exact path="/" componenent={Home} />
                    <Route path="/blog" componenent={Blog} />
                    <Route path="/" componenent={Home} />
                {/* </div> */}
            </Switch>
    )
}

export default App