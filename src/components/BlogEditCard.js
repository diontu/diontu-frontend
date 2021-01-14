import React, { Component } from "react"
import Editor from "./Editor"
import { Button } from "react-bootstrap"
import axios from "axios"

class BlogEditCard extends Component {
  // requires 3 methods to change the state of the variables that was used to render this
  // REQUIRED OBJECT:
  // blog - object which contains the following methods and variables
  // REQUIRED VARIABLES:
  // title, preview, desc
  // REQUIRED METHODS from object:
  // onChangeTitle(changedTitle)
  // onChangePreview(changedPreview)
  // onChangeDesc(changedDesc)
  constructor({ backendURI, id, blog, _handleBlogClick }) {
    super()
    this.blog = blog
    this.title = blog.blogTitle
    this.preview = blog.blogPreview
    this.desc = blog.blogDesc
    this.onChangeTitle = blog.onChangeTitle
    this.onChangePreview = blog.onChangePreview
    this.onChangeDesc = blog.onChangeDesc
    this.id = id
    this.backendURI = backendURI
    //method
    this._handleBlogClick = (event) => _handleBlogClick(event)
    //state
    this.state = {
      performedChanges: false,
      error: false,
    }
  }

  _handleSave = async (event) => {
    this.setState({ performedChanges: false })
    //if title is different, then make changes to db
    let requestBody = {}
    console.log("_handleSave")
    console.log(this.title)
    console.log(this.blog.newTitle)
    if (this.title !== this.blog.newTitle) {
      requestBody.blogTitle = this.blog.newTitle
      this.setState({ performedChanges: true })
      console.log("1")
    } else {
      requestBody.blogTitle = this.blog.blogTitle
    }
    //if preview is different, then make changes to db
    if (this.preview !== this.blog.newPreview) {
      requestBody.blogPreview = this.blog.newPreview
      this.setState({ performedChanges: true })
      console.log("2")
    } else {
      requestBody.blogPreview = this.blog.blogPreview
    }
    //if description is different, then make changes to db
    if (this.desc !== this.blog.newDesc) {
      requestBody.blogDesc = this.blog.newDesc
      this.setState({ performedChanges: true })
      console.log("3")
    } else {
      requestBody.blogDesc = this.blog.blogDesc
    }
    //if performedChanges is true, then make the axios post call
    console.log(this)
    if (this.state.performedChanges) {
      await axios.put(`${this.backendURI}/blogs/${this.blog._id}`, requestBody)
      // console.log(requestBody)
      // console.log(this)
      // console.log(this.state)
    }
  }

  _handleDelete = async (event) => {

  }

  _handleCancel = (event) => this._handleBlogClick(event)

  render() {
    return (
      <div style={styles.sectionDiv}>
        <div style={styles.buttonsDiv}>
          <Button variant="danger" style={styles.buttonStyle}>Delete</Button>
        </div>
        {/* BlogTitle Section*/}
        <div>
          <div style={styles.headerDiv}>
            {/* Title */}
            <h5>Title</h5>
          </div>
          <div style={styles.editBoxDiv}>
            {/* Blog Title Edit Box */}
            <Editor currentContent={this.title} onChangeState={this.onChangeTitle} />
          </div>
        </div>
        {/* Blog Preview Section */}
        <div>
          <div style={styles.headerDiv}>
            {/* Preview */}
            <h5>Preview</h5>
          </div>
          <div style={styles.editBoxDiv}>
            {/* Blog Preview Edit Box */}
            <Editor currentContent={this.preview} onChangeState={this.onChangePreview} />
          </div>
        </div>
        {/* BlogDescription Section */}
        <div>
          <div style={styles.headerDiv}>
            {/* Description */}
            <h5>Description</h5>
          </div>
          <div style={styles.editBoxDiv}>
            {/* Blog Description Edit Box */}
            <Editor currentContent={this.desc} onChangeState={this.onChangeDesc} />
          </div>
        </div>
        <div style={styles.buttonsDiv}>
          <Button style={styles.buttonStyle} onClick={this._handleSave}>Save</Button>
          <Button id={this.id} variant="secondary" style={styles.buttonStyle} onClick={this._handleCancel}>
            Cancel
          </Button>
        </div>
      </div>
    )
  }
}

const styles = {
  sectionDiv: {
    display: "inline-block",
    margin: "10px",
    width: "100%",
  },
  headerDiv: {
    display: "inline-block",
    padding: "13px",
    width: "20%",
    verticalAlign: "top",
    textAlign: "center",
  },
  editBoxDiv: {
    display: "inline-block",
    width: "80%",
  },
  buttonsDiv: {
    margin: "10px",
    textAlign: "right",
  },
  buttonStyle: {
    marginLeft: "7px",
    marginRight: "7px",
  },
}

export default BlogEditCard
