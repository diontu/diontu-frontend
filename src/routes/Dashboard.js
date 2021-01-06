import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import axios from "axios"

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      redirectToLogin: "/login"
    }
    axios.defaults.withCredentials = true
  }

  async componentDidMount() {
    try {
      //do nothing if no error
      await axios.get(`${this.props.backendURI}/dashboard`)
      const blogs = await axios.get(`${this.props.backendURI}/blogs`)
      this.setState({blogs: blogs.data})
    } catch (err) {
      //redirect user to login if not logged in
      this.props.history.push(this.state.redirectToLogin)
    }
  }

  render() {
    return (
      <div style={{ textAlign: "left" }}>
        <h1>Blogs</h1>
        <ul>
          {this.state.blogs.map((blog) => (
            <li>
              {/* make whole line a button that will make text area for the blog appear */}
              <span>
                {blog.blogTitle}
              </span>
              <span textAlign="right">
                <button>Helloo</button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default withRouter(Dashboard)
