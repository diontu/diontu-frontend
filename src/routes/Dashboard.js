import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import axios from "axios"
import BlogEditCard from "./../components/BlogEditCard"

import { GrFormAdd, GrFormSubtract } from "react-icons/gr"

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfBlogs: 0,
      blogs: [],
      redirectToLogin: "/login",
    }
    axios.defaults.withCredentials = true
  }

  async componentDidMount() {
    try {
      //do nothing if no error
      await axios.get(`${this.props.backendURI}/dashboard`)
      const blogs = await axios.get(`${this.props.backendURI}/blogs`)
      this.setState({ blogs: blogs.data })
      //add index to each blog
      for (var blog of this.state.blogs) {
        blog.index = this.state.numberOfBlogs
        this.setState({ numberOfBlogs: this.state.numberOfBlogs + 1 })
      }
      //add hidden state as well as state for Title, Preview, Desc, to each blog
      let newBlogsState = this.state.blogs.map((blog) => {
        let newBlogState = Object.assign({}, blog)
        newBlogState.newTitle = ""
        newBlogState.newPreview = ""
        newBlogState.newDesc = ""
        newBlogState.onChangeTitle = (changedTitle) => {
          newBlogState.newTitle = changedTitle
        }
      
        newBlogState.onChangePreview = (changedPreview) => {
          newBlogState.newPreview = changedPreview
        }
      
        newBlogState.onChangeDesc = (changedDesc) => {
          newBlogState.newDesc = changedDesc
        }
        newBlogState.hidden = true
        return newBlogState
      })

      this.setState({ blogs: newBlogsState })
      console.log(this.state.blogs)
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

  _handleCreateBlog = (event) => {}

  _handleDeleteBlog = (event) => {}

  render() {
    return (
      <div style={{ textAlign: "left" }}>
        <h1>Blogs</h1>

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
                  padding: '10px',
                  textDecoration: "none",
                  display: "inline-block",
                  width: "100%",
                }}
              >
                <div
                  id={blog.index}
                  style={{
                    display: "inline-block",
                    width: "97%",
                  }}
                >
                  {blog.blogTitle}
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
              {!blog.hidden ? <BlogEditCard blog={blog}/> : null}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(Dashboard)
