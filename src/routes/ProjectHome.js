import React, { Component } from "react"
import axios from "axios"
import { processUrl } from "./../utils/common"

class ProjectHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
    }
  }

  async componentDidMount() {
    try {
      const projects = await axios.get(`${this.props.backendURI}/projects`)
      this.setState({
        projects: projects.data,
      })
    } catch (err) {}
  }

  render() {
    return (
      <div>
        <h1>Projects</h1>
        <p>Projects are ordered from most recent <strong>(top)</strong> to least recent <strong>(bottom)</strong>.</p>
        <div>
          {this.state.projects.map((project) => (
            <div key={project._id}>
              <ul>
                {project.published ? <li><a href={processUrl("/project", project.projectName)}>{project.projectName}</a></li> : null}
              </ul>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default ProjectHome
