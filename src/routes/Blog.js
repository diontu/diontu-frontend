import React, { Component } from "react"
import axios from "axios"
import Markdown from "markdown-to-jsx"
import { processUrl } from "../utils/common"

/**
 * Blog page.
 */
class Blog extends Component {
  // when the user reaches this page, it will look at the url and based off the url,
  // it will look at the database for the existing title and render its contents
  constructor(props) {
    super(props)
    this.state = {
      blog: {
        blogTitle: "",
        blogPreview: "",
        blogDesc: "",
        dateCreated: "",
        dateUpdated: ""
      },
    }
  }

  async componentDidMount() {
    try {
      const response = await axios.get(`${this.props.backendURI}/blogs`)
      const blogs = response.data
      for (let blog of blogs) {
        const processedURL = processUrl("/blog", blog.blogTitle)
        if (processedURL === window.location.pathname) {
          this.setState({
            blog: blog,
          })
          break
        }
      }
    } catch (err) {
      // do nothing
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.blog.blogTitle}</h1>
        <div>{this.state.blog.dateCreated}</div>
        <div>{this.state.blog.dateUpdated}</div>
        <Markdown>{this.state.blog.blogDesc}</Markdown>
      </div>
    )
  }
}

export default Blog
