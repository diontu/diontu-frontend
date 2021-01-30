import React, { Component } from "react"
import { withRouter } from "react-router-dom"

class ErrorPage extends Component {
    render() {
        return(
            <div style={{ color: "red" }}>
                404 Error... Could not find what you're looking for.
            </div>
        )
    }
}

export default ErrorPage
