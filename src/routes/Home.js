import React, { Component } from "react"
import { withRouter } from "react-router-dom"

import TechStack from "./../components/TechStack"
import ProjectCard from "./../components/ProjectCard"
import axios from "axios"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
    }
  }

  async componentDidMount() {
    const projects = await axios.get(`${this.props.backendURI}/projects`)
    this.setState({
      projects: projects.data,
    })
  }

  render() {
    return (
      <div>
        <h1>Hi! I'm Dion Tu.</h1>
        <p>
          This is my personal website where I showcase my projects and write about technical topics
          in my blog that I find are interesting.
        </p>
        <h3>Projects</h3>
        <div>
          {this.state.projects.map((project) => (
            <div
              key={project._id}
              style={{
                display: "inline-block",
                width: "33%",
              }}
            >
              {project.published ? <ProjectCard project={project} /> : null}
            </div>
          ))}
        </div>
        <TechStack />
      </div>
    )
  }
}

export default withRouter(Home)
