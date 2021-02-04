import React, { Component } from "react"
import Editor from "./Editor"
import { Alert, Button } from "react-bootstrap"
import Select from "react-select"
import axios from "axios"

class ProjectEditCard extends Component {
  constructor({ backendURI, id, project, _handleProjectClick }) {
    super()
    // project
    this.project = project
    // add "newName", "newDesc" to class var
    let newProjectState = Object.assign({}, this.project)
    newProjectState.newName = ""
    newProjectState.newDesc = ""
    // onChange Project Name class var for editor
    newProjectState.onChangeName = (id, changedName) => {
      if (this.project._id === id) {
        this.project.newName = changedName
      }
    }
    // onChange Project Description class var for editor
    newProjectState.onChangeDesc = (id, changedDesc) => {
      if (this.project._id === id) {
        this.project.newDesc = changedDesc
      }
    }
    // onChange Project Published class var dropdown menu
    newProjectState.onChangePublished = (selectedOption) => {
      this.setState({
        published: selectedOption,
      })
    }
    // other class var
    this.project = newProjectState
    this.name = project.projectName
    this.desc = project.projectDesc
    // this.startDate = project.startDate
    // this.endDate = project.endDate
    this.onChangeName = this.project.onChangeName
    this.onChangeDesc = this.project.onChangeDesc
    this.onChangePublished = this.project.onChangePublished
    this.id = id
    this.backendURI = backendURI
    this._handleProjectClick = (event) => _handleProjectClick(event)
    // state
    this.state = {
      published: {
        value: project.published ? true : false,
        label: project.published ? "Yes" : "No",
      },
      //   startDate: dateParser(this.startDate),
      //   endDate: dateParser(this.endDate),
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
    if (this.name !== this.project.newName) {
      requestBody.projectName = this.project.newName
    } else {
      requestBody.projectName = this.project.projectName
    }
    // if description is different, then make changes to DB
    if (this.desc !== this.project.newDesc) {
      requestBody.projectDesc = this.project.newDesc
    } else {
      requestBody.projectDesc = this.project.projectDesc
    }
    // append the published variable (boolean) to the requestBody
    requestBody.published = this.state.published.value
    // if performedChanges is true, then make the axios post call
    try {
      await axios.put(`${this.backendURI}/projects/${this.project._id}`, requestBody)
      this.setState({
        performedChanges: true,
        updateMessage:
          "This project post has been updated... please refresh the page to view changes.",
      })
    } catch (err) {
      // do nothing
    }
  }

  /**
   * Handles click to delete project.
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
   */
  _handleDelete = async (event) => {
    this.setState({ performedChanges: false })
    try {
      await axios.delete(`${this.backendURI}/projects/${this.project._id}`)
      this.setState({
        performedChanges: true,
        updateMessage:
          "This project post has been deleted... please refresh the page to view changes.",
      })
    } catch (err) {
      // do nothing
    }
  }

  /**
   * Handles click to expand/minimize project content.
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
   */
  _handleCancel = (event) => this._handleProjectClick(event)

  //TODO: fix up the UI
  render() {
    const options = [
      { value: true, label: "Yes" },
      { value: false, label: "No" },
    ]

    return (
      <div>
        <div style={styles.sectionDiv}>
          {this.state.performedChanges ? (
            <Alert variant="success">{this.state.updateMessage}</Alert>
          ) : null}
          <div style={styles.buttonsDiv}>
            <Button variant="danger" style={styles.buttonStyle} onClick={this._handleDelete}>
              Delete
            </Button>
          </div>
          {/* Project Name Section*/}
          <div>
            <div style={styles.headerDiv}>
              {/* Name */}
              <h5>Name</h5>
            </div>
            <div style={styles.editBoxDiv}>
              {/* Project Name Edit Box */}
              <Editor
                id={this.project._id}
                currentContent={this.name}
                onChangeState={this.onChangeName}
              />
            </div>
          </div>
          {/* Project Description Section */}
          <div>
            <div style={styles.headerDiv}>
              {/* Description */}
              <h5>Description</h5>
            </div>
            <div style={styles.editBoxDiv}>
              {/* Project Description Edit Box */}
              <Editor
                id={this.project._id}
                currentContent={this.desc}
                onChangeState={this.onChangeDesc}
              />
            </div>
          </div>
          {/* Project Published Section */}
          <div>
            <div style={styles.headerDiv}>
              {/* Published*/}
              <h5>Published?</h5>
            </div>
            <div style={styles.editBoxDiv}>
              {/* Project Published Dropdown menu */}
              <Select
                value={this.state.published}
                onChange={this.onChangePublished}
                options={options}
              />
            </div>
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

export default ProjectEditCard
