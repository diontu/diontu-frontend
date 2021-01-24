import React, { Component } from "react"
import Editor from "./Editor"
import { Alert, Button } from "react-bootstrap"
import Select from "react-select"
import axios from "axios"

/**
 * Blog Edit Card.
 */
class BlogEditCard extends Component {
  constructor({ backendURI, id, blog, _handleBlogClick }) {
    super()
    // blog
    this.blog = blog
    // add "newTitle", "newPreview", "newDesc" to class var
    let newBlogState = Object.assign({}, this.blog)
    newBlogState.newTitle = ""
    newBlogState.newPreview = ""
    newBlogState.newDesc = ""
    // onChange Blog Title class var for editor
    newBlogState.onChangeTitle = (id, changedTitle) => {
      if (this.blog._id === id) {
        this.blog.newTitle = changedTitle
      }
    }
    // onChange Blog Preview class var for editor
    newBlogState.onChangePreview = (id, changedPreview) => {
      if (this.blog._id === id) {
        this.blog.newPreview = changedPreview
      }
    }
    // onChange Blog Description class var for editor
    newBlogState.onChangeDesc = (id, changedDesc) => {
      if (this.blog._id === id) {
        this.blog.newDesc = changedDesc
      }
    }
    // onChange Blog Published class var dropdown menu
    newBlogState.onChangePublished = (selectedOption) => {
      this.setState({
        published: selectedOption,
      })
    }
    // other class var
    this.blog = newBlogState
    this.title = blog.blogTitle
    this.preview = blog.blogPreview
    this.desc = blog.blogDesc
    this.onChangeTitle = this.blog.onChangeTitle
    this.onChangePreview = this.blog.onChangePreview
    this.onChangeDesc = this.blog.onChangeDesc
    this.onChangePublished = this.blog.onChangePublished
    this.id = id
    this.backendURI = backendURI
    this._handleBlogClick = (event) => _handleBlogClick(event)
    // state
    this.state = {
      published: {
        value: blog.published ? true : false,
        label: blog.published ? "Yes" : "No",
      },
      performedChanges: false,
      error: false,
      updateMessage: "",
    }
  }

  /**
   * Handle click to save changes to the DB.
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event 
   */
  _handleSave = async (event) => {
    this.setState({ performedChanges: false })
    // if title is different, then make changes to DB
    let requestBody = {}
    if (this.title !== this.blog.newTitle) {
      requestBody.blogTitle = this.blog.newTitle
    } else {
      requestBody.blogTitle = this.blog.blogTitle
    }
    // if preview is different, then make changes to DB
    if (this.preview !== this.blog.newPreview) {
      requestBody.blogPreview = this.blog.newPreview
    } else {
      requestBody.blogPreview = this.blog.blogPreview
    }
    // if description is different, then make changes to DB
    if (this.desc !== this.blog.newDesc) {
      requestBody.blogDesc = this.blog.newDesc
    } else {
      requestBody.blogDesc = this.blog.blogDesc
    }
    // append the published variable (boolean) to the requestBody
    requestBody.published = this.state.published.value
    // if performedChanges is true, then make the axios post call
    try {
      await axios.put(`${this.backendURI}/blogs/${this.blog._id}`, requestBody)
      this.setState({
        performedChanges: true,
        updateMessage:
          "This blog post has been updated... please refresh the page to view changes.",
      })
    } catch (err) {
      // do nothing
    }
  }

  /**
   * Handles click to delete blog.
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event 
   */
  _handleDelete = async (event) => {
    this.setState({ performedChanges: false })
    try {
      await axios.delete(`${this.backendURI}/blogs/${this.blog._id}`)
      this.setState({
        performedChanges: true,
        updateMessage:
          "This blog post has been deleted... please refresh the page to view changes.",
      })
    } catch (err) {
      // do nothing
    }
  }

  /**
   * Handles click to expand/minimize blog content.
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event 
   */
  _handleCancel = (event) => this._handleBlogClick(event)

  render() {
    const options = [
      { value: true, label: "Yes" },
      { value: false, label: "No" },
    ]

    return (
      <div style={styles.sectionDiv}>
        {this.state.performedChanges ? (
          <Alert variant="success">{this.state.updateMessage}</Alert>
        ) : null}
        <div style={styles.buttonsDiv}>
          <Button variant="danger" style={styles.buttonStyle} onClick={this._handleDelete}>
            Delete
          </Button>
        </div>
        {/* BlogTitle Section*/}
        <div>
          <div style={styles.headerDiv}>
            {/* Title */}
            <h5>Title</h5>
          </div>
          <div style={styles.editBoxDiv}>
            {/* Blog Title Edit Box */}
            <Editor
              id={this.blog._id}
              currentContent={this.title}
              onChangeState={this.onChangeTitle}
            />
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
            <Editor
              id={this.blog._id}
              currentContent={this.preview}
              onChangeState={this.onChangePreview}
            />
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
            <Editor
              id={this.blog._id}
              currentContent={this.desc}
              onChangeState={this.onChangeDesc}
            />
          </div>
        </div>
        {/* Blog Published Section */}
        <div>
          <div style={styles.headerDiv}>
            {/* Published*/}
            <h5>Published?</h5>
          </div>
          <div style={styles.editBoxDiv}>
            {/* Blog Published Dropdown menu */}
            <Select
              value={this.state.published}
              onChange={this.onChangePublished}
              options={options}
            />
          </div>
        </div>
        <div style={styles.buttonsDiv}>
          <Button style={styles.buttonStyle} onClick={this._handleSave}>
            Save
          </Button>
          <Button
            id={this.id}
            variant="secondary"
            style={styles.buttonStyle}
            onClick={this._handleCancel}
          >
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
