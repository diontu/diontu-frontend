import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { ProjectImg, ProjectOverlay, Container } from "./styles/ProjectCardStyles"

class ProjectCard extends Component {
  constructor({ project, history }) {
    super()
    this.project = project
    this.history = history
    this.urlPath = `/project/${project.projectName.trim().replaceAll(" ", "-").toLowerCase()}`
  }

  _handleProjectClick = (event) => {
    event.preventDefault()
    this.history.push(this.urlPath)
  }

  render() {
    const { projectName, projectImgUrl } = this.project

    return (
      <Container>
        <ProjectImg src={projectImgUrl} alt={`${projectName}_img`} />
        <ProjectOverlay href={this.urlPath} onClick={this._handleProjectClick}>
          {projectName}
        </ProjectOverlay>
      </Container>
    )
  }
}

export default withRouter(ProjectCard)
