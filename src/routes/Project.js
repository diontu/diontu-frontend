import React, { Component } from "react"
import axios from "axios"

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
    const response = await axios.get(`${this.props.backendURI}/projects`)
    const projects = response.data
    for (let project of projects) {
      const processedURL = `/project/${project.projectName.trim().replaceAll(" ", "-").toLowerCase()}`
      if (processedURL === window.location.pathname) {
        this.setState({
          project: project,
        })
        break
      }
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
