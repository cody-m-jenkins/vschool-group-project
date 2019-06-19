import React, { Component } from "react"
import axios from "axios" 
const { Provider, Consumer} = React.createContext()

class BlogProvider extends Component{
    constructor(props){
        super(props)
            this.state = {
                posts: [],
                
            }
    }


    getPosts = () => {
        axios.get("/blogs").then((response) => {
            // console.log(response.data)
            this.setState({posts: response.data})
            // console.log(response.data)
        })
    }

    newPosts = () => {
        this.setState((prevState) => {
            return {

            }
        })
    }

    componentDidMount(){
        this.getPosts()
    }

    render() {
        return(
            <Provider value = {{
                ...this.state,
            }}>
            {this.props.children}
            </Provider>
        )
    }
}
export default BlogProvider

export const withPosts = (Comp) => {
    return props => <Consumer>
                        {value => <Comp {...value}{...props} />}
                    </Consumer>
}
