import React, { Component } from "react"
import BlogEditCard from "./../components/BlogEditCard"
import { withRouter } from "react-router-dom"

class CreateBlog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogTitle: "",
      blogPreview: "",
      blogDescription: "",
    }
  }

  _handleCancel = (event) => {}

  _handleCreateBlog = (event) => {
    // perform at the end of the clicking the CREATE button
    this.setState({
      blogTitle: "",
      blogPreview: "",
      blogDescription: "",
    })
  }

  render() {
    return (
      <div>
        <h1>Create New Blog</h1>
      </div>
    )
  }
}

export default withRouter(CreateBlog)
