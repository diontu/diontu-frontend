import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import axios from "axios"
import BlogEditCard from "./../components/BlogEditCard"
import { Button, Alert, Badge } from "react-bootstrap"

import { GrFormAdd, GrFormSubtract } from "react-icons/gr"

/**
 * Dashboard Page. Used to add/update content from blogs.
 */
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
      await axios.get(`${this.props.backendURI}/dashboard`)
      const blogs = await axios.get(`${this.props.backendURI}/blogs`)
      this.setState({ blogs: blogs.data })
      // added "numberOfBlogs" as state
      for (var blog of this.state.blogs) {
        blog.index = this.state.numberOfBlogs
        this.setState({ numberOfBlogs: this.state.numberOfBlogs + 1 })
      }
      // added "hidden" state
      let newBlogsState = this.state.blogs.map((blog) => {
        let newBlogState = Object.assign({}, blog)
        newBlogState.hidden = true
        return newBlogState
      })
      this.setState({ blogs: newBlogsState })
    } catch (err) {
      // redirect user to login if not logged in
      this.props.history.push(this.state.redirectToLogin)
    }
  }

  /**
   * Handles click to expand/minimize blog content.
   * @param {React.MouseEvent<HTMLElement, MouseEvent>} event
   */
  _handleBlogClick = (event) => {
    event.preventDefault()
    this.setState((prevState, props) => {
      let newBlogsState = prevState.blogs
      if (event.target.id !== "") {
        newBlogsState[event.target.id].hidden = !newBlogsState[event.target.id].hidden
      }
      return { blogs: newBlogsState }
    })
  }

  /**
   * Handles click to create new template blog.
   * @param {React.MouseEvent<HTMLElement, MouseEvent>} event
   */
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
    } catch (err) {
      // do nothing
    }
  }

  render() {
    return (
      <div style={{ textAlign: "left" }}>
        <div style={{ margin: "10px" }}>
          <div style={styles.halfDiv}>
            <h1>Blogs</h1>
          </div>
          <div style={styles.halfDivAlignRight}>
            <Button variant="success" onClick={this._handleCreateBlog}>
              New Blog
            </Button>
          </div>
        </div>
        <Alert variant="primary">
          To change the projects, make manual changes to MongoDB. Make sure each project name or
          blog name is unique.
        </Alert>
        {this.state.createdBlog ? (
          <Alert variant="success">{this.state.updateMessage}</Alert>
        ) : null}
        <div>
          {this.state.blogs.map((blog) => (
            <div key={blog.blogTitle} style={styles.divider}>
              <a href="/" onClick={this._handleBlogClick} style={styles.link}>
                <div id={blog.index} style={styles.blogTitle}>
                  {blog.blogTitle}
                </div>
                <div id={blog.index} style={styles.blogStatus}>
                  {blog.published ? (
                    <Badge variant="success">Published</Badge>
                  ) : (
                    <Badge variant="info">Not Published</Badge>
                  )}
                </div>
                <div id={blog.index} style={styles.blogMinMaxIcon}>
                  {blog.hidden ? <GrFormAdd id={blog.index} /> : <GrFormSubtract id={blog.index} />}
                </div>
              </a>
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

const styles = {
  halfDiv: {
    display: "inline-block",
    width: "50%",
  },
  halfDivAlignRight: {
    display: "inline-block",
    width: "50%",
    textAlign: "right",
  },
  divider: {
    borderTop: "solid",
    borderWidth: "2px",
    borderColor: "#A8A8A8",
  },
  link: {
    padding: "10px",
    textDecoration: "none",
    display: "inline-block",
    width: "100%",
  },
  blogTitle: {
    display: "inline-block",
    width: "80%",
  },
  blogStatus: {
    display: "inline-block",
    width: "17%",
  },
  blogMinMaxIcon: {
    display: "inline-block",
    width: "3%",
  },
}

export default withRouter(Dashboard)
