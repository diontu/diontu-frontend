import React, { Component } from "react"
import axios from "axios"
import processProjectUrl from "./../utils/processUrl"

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
        const processedURL = processProjectUrl("/project", project.projectName)
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
