import React, { Component } from "react"

// when the user reaches this page, it will look at the url and based off the url,
// it will look at the database for the existing title and render its contents
class Blog extends Component {
    constructor(props) {
        super(props)
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>
                   BlogTitle goes here
                </h1>
            </div>
        )
    }
}

export default Blog