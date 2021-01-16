import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { Card } from "react-bootstrap"

class BlogCard extends Component {
  constructor({ blog, history }) {
    super()
    this.blog = blog
    this.history = history
    this.urlPath = `/blog/${blog.blogTitle.trim().replaceAll(" ", "-").toLowerCase()}`
  }

  _handleMoreInfoClick = (event) => {
    event.preventDefault()
    this.history.push(this.urlPath)
  }

  render() {
    return (
      <Card
        style={{
          width: "auto",
          textAlign: "left",
          borderLeft: "none",
          borderRight: "none",
          borderBottom: "none",
          borderRadius: "0px",
        }}
      >
        <Card.Body>
          <Card.Title>{this.blog.blogTitle}</Card.Title>
          <Card.Text>{this.blog.blogPreview}</Card.Text>
          <Card.Link href={this.urlPath} onClick={this._handleMoreInfoClick}>
            More...
          </Card.Link>
        </Card.Body>
      </Card>
    )
  }
}

export default withRouter(BlogCard)
