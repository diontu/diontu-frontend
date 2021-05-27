import React, { Component } from "react"
import { Card } from "react-bootstrap"
import { processUrl, dateParser } from "../utils/common"

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
          <Card.Title><strong>{this.blog.blogTitle}</strong></Card.Title>
          <Card.Subtitle style={styles.date}><strong>{dateParser(this.blog.dateCreated)}</strong></Card.Subtitle>
          <Card.Text>{this.blog.blogPreview}</Card.Text>
          <Card.Link href={this.urlPath}>More...</Card.Link>
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
  date: {
    color: "#808080",
  },
}

export default BlogCard
