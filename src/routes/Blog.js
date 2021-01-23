import React, { Component } from "react"
import axios from "axios"
import Markdown from "markdown-to-jsx"

// when the user reaches this page, it will look at the url and based off the url,
// it will look at the database for the existing title and render its contents
class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blog: {
        blogTitle: "",
        blogPreview: "",
        blogDesc: "",
      },
    }
  }

  async componentDidMount() {
    const response = await axios.get(`${this.props.backendURI}/blogs`)
    const blogs = response.data
    for (let blog of blogs) {
      const processedURL = `/blog/${blog.blogTitle.trim().replaceAll(" ", "-").toLowerCase()}`
      if (processedURL === window.location.pathname) {
        this.setState({
          blog: blog,
        })
        break
      }
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.blog.blogTitle}</h1>
        <Markdown>{this.state.blog.blogDesc}</Markdown>
      </div>
    )
  }
}

export default Blog
