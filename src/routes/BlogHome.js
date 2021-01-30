import React, { Component } from "react"
import BlogCard from "../components/BlogCard"
import axios from "axios"

/**
 * Blog Home Page.
 */
class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
    }
  }

  async componentDidMount() {
    try {
      const blogs = await axios.get(`${this.props.backendURI}/blogs`)
      this.setState({
        blogs: blogs.data,
      })
    } catch (err) {}
  }

  render() {
    return (
      <div style={styles.pageDiv}>
        <h1>Blog</h1>
        <p>Welcome to my blog!</p>
        <p>
          This is where I talk about the technologies/concepts I am currently learning or have
          already learned that I find are interesting. If there is a topic that you want me to talk
          about, send me an email, which can be found over at the <em>Contact</em> page.
        </p>
        <p>
          The content in this blog are based on my <strong>personal experiences</strong>. Any
          sourced information is credited.
        </p>
        {this.state.blogs.map((blog) => (
          <div key={blog._id}>
            {blog.published ? <BlogCard key={blog._id} blog={blog}></BlogCard> : null}
          </div>
        ))}
      </div>
    )
  }
}

const styles = {
  pageDiv: {
    marginBottom: "80px",
  },
}

export default Blog
