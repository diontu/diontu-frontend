import React, { Component } from "react"
import axios from "axios"

/**
 * Project Page.
 */
class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project: {
        projectName: "",
        projectDesc: "",
        projectImgUrl: "",
      },
    }
  }

  async componentDidMount() {
    try {
      const response = await axios.get(`${this.props.backendURI}/projects`)
      const projects = response.data
      for (let project of projects) {
        const processedURL = this.processProjectUrl(project.projectName)
        if (processedURL === window.location.pathname) {
          this.setState({
            project: project,
          })
          break
        }
      }
    } catch (err) {
      // do nothing
    }
  }

  /**
   * Processes the project name into a Url.
   * @param {String} value
   */
  processProjectUrl = (value) => {
    return `/project/${value.trim().replaceAll(" ", "-").toLowerCase()}`
  }

  render() {
    return (
      <div>
        <h1>{this.state.project.projectName}</h1>
        <p>{this.state.project.projectDesc}</p>
      </div>
    )
  }
}

export default Project
