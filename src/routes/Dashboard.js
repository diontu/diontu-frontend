import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import axios from "axios"
import BlogEditCard from "./../components/BlogEditCard"
import { Button, Alert, Badge } from "react-bootstrap"

import { GrFormAdd, GrFormSubtract } from "react-icons/gr"

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfBlogs: 0,
      blogs: [],
      createdBlog: false,
      redirectToLogin: "/login",
      updateMessage: "",
    }
    axios.defaults.withCredentials = true
  }

  async componentDidMount() {
    try {
      //do nothing if no error
      await axios.get(`${this.props.backendURI}/dashboard`)
      const blogs = await axios.get(`${this.props.backendURI}/blogs`)
      this.setState({ blogs: blogs.data })
      //Extra state for each blog:
      // VAR - index
      for (var blog of this.state.blogs) {
        blog.index = this.state.numberOfBlogs
        this.setState({ numberOfBlogs: this.state.numberOfBlogs + 1 })
      }
      //Extra States for each blog:
      // VAR - hidden
      let newBlogsState = this.state.blogs.map((blog) => {
        let newBlogState = Object.assign({}, blog)
        newBlogState.hidden = true
        return newBlogState
      })

      this.setState({ blogs: newBlogsState })
    } catch (err) {
      //redirect user to login if not logged in
      this.props.history.push(this.state.redirectToLogin)
    }
  }

  _handleBlogClick = (event) => {
    //expand
    event.preventDefault()
    this.setState((prevState, props) => {
      let newBlogsState = prevState.blogs
      if (event.target.id !== "") {
        newBlogsState[event.target.id].hidden = !newBlogsState[event.target.id].hidden
      }
      return { blogs: newBlogsState }
    })
  }

  _handleCreateBlog = async (event) => {
    try {
      await axios.post(`${this.props.backendURI}/blogs`, {
        blogTitle: "New Blog Title",
        blogPreview: "New Blog Preview",
        blogDesc: "New Blog Description",
      })
      this.setState({
        createdBlog: true,
        updateMessage: "Created new blog... Refresh the page to see the changes!",
      })
    } catch (err) {}
  }

  render() {
    return (
      <div style={{ textAlign: "left" }}>
        <div style={{ margin: "10px" }}>
          <div
            style={{
              display: "inline-block",
              width: "50%",
            }}
          >
            <h1>Blogs</h1>
          </div>
          <div
            style={{
              display: "inline-block",
              width: "50%",
              textAlign: "right",
            }}
          >
            <Button variant="success" onClick={this._handleCreateBlog}>
              New Blog
            </Button>
          </div>
        </div>
        <Alert variant="primary">To change the projects, make manual changes to MongoDB. Make sure each project name or blog name is unique.</Alert>
        {this.state.createdBlog ? (
          <Alert variant="success">{this.state.updateMessage}</Alert>
        ) : null}
        <div>
          {this.state.blogs.map((blog) => (
            // make whole line a button that will make text area for the blog appear
            <div
              key={blog.blogTitle}
              style={{
                borderTop: "solid",
                borderWidth: "2px",
                borderColor: "#A8A8A8",
              }}
            >
              <a
                href="/"
                onClick={this._handleBlogClick}
                style={{
                  padding: "10px",
                  textDecoration: "none",
                  display: "inline-block",
                  width: "100%",
                }}
              >
                <div
                  id={blog.index}
                  style={{
                    display: "inline-block",
                    width: "80%",
                  }}
                >
                  {blog.blogTitle}
                </div>
                <div
                  id={blog.index}
                  style={{
                    display: "inline-block",
                    width: "17%",
                  }}
                >
                  {blog.published ? (
                    <Badge variant="success">Published</Badge>
                  ) : (
                    <Badge variant="info">Not Published</Badge>
                  )}
                </div>
                <div
                  id={blog.index}
                  style={{
                    display: "inline-block",
                    width: "3%",
                  }}
                >
                  {blog.hidden ? <GrFormAdd id={blog.index} /> : <GrFormSubtract id={blog.index} />}
                </div>
              </a>
              {/* this is the blog editing place */}
              {!blog.hidden ? (
                <BlogEditCard
                  backendURI={this.props.backendURI}
                  id={blog.index}
                  blog={blog}
                  _handleBlogClick={this._handleBlogClick}
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(Dashboard)
