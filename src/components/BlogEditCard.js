import React, { Component } from "react"
import Editor from "./Editor"
import { Button } from "react-bootstrap"

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
  constructor({ id, blog, _handleBlogClick }) {
    super()
    this.blog = blog
    this.title = blog.blogTitle
    this.preview = blog.blogPreview
    this.desc = blog.blogDesc
    this.onChangeTitle = blog.onChangeTitle
    this.onChangePreview = blog.onChangePreview
    this.onChangeDesc = blog.onChangeDesc
    this.id = id
    //method
    this._handleBlogClick = (event) => _handleBlogClick(event)
    //state
    this.state = {
      performedChanges: false,
      error: false
    }
  }

  _handleSave = async (event) => {
    this.setState({ performedChanges: false })
    //if title is different, then make changes to db
    if (this.title !== this.blog.newTitle) {
      try {

        this.setState({ performedChanges: true })
      } catch (err) {

      }
    }
    //if preview is different, then make changes to db
    if (this.preview !== this.blog.newPreview) {
      try {

        this.setState({ performedChanges: true })
      } catch (err) {

      }
    }
    //if description is different, then make changes to db
    if (this.desc !== this.blog.newDesc) {
      try {

        this.setState({ performedChanges: true })
      } catch (err) {

      }
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
          <Button style={styles.buttonStyle}>Save</Button>
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
