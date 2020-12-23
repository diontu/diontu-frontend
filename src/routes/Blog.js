import React, { Component } from "react"
import BlogCard from "../components/BlogCard"

class Blog extends Component {
  render() {
    return (
      <div>
        <h1>Blog</h1>
        <p>Welcome to my blog!</p>
        <p>
          This is where I talk about the technologies/concepts I am currently learning or have
          already learned that I find are interesting. If there is a topic that you want me to talk
          about, send me an email, which can be found over at the <em>Contact</em> page.
        </p>
        <p>
          This is <strong>mainly opinionated</strong> and any sourced information is credited.
        </p>
        <BlogCard title="title" desc="description"></BlogCard>
        <BlogCard title="title" desc="description"></BlogCard>
      </div>
    )
  }
}

export default Blog
