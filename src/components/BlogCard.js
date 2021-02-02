import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { Card } from "react-bootstrap"
import { processUrl } from "../utils/common"

class BlogCard extends Component {
  constructor({ blog, history }) {
    super()
    this.blog = blog
    this.history = history
    this.urlPath = processUrl("/blog", blog.blogTitle)
  }

  // _handleMoreInfoClick = (event) => {
  //   event.preventDefault()
  //   this.history.push(this.urlPath)
  // }

  render() {
    return (
      <Card style={styles.card}>
        <Card.Body>
          <Card.Title>{this.blog.blogTitle}</Card.Title>
          <Card.Text>{this.blog.blogPreview}</Card.Text>
          <Card.Link href={this.urlPath}>
            More...
          </Card.Link>
        </Card.Body>
      </Card>
    )
  }
}

const styles = {
  card: {
    width: "auto",
    textAlign: "left",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none",
    borderRadius: "0px",
  },
}

export default withRouter(BlogCard)
