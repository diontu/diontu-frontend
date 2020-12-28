import React, { Component } from "react"
import { ProjectImg, ProjectOverlay, Container } from "./styles/ProjectCardStyles"

class ProjectCard extends Component {
  render() {
    const { name, path, img } = this.props

    return (
      <Container>
        <ProjectImg src={window.location.origin + "/logo192.png"} alt={`${name}_img`} />
        <ProjectOverlay href={path}>{name}</ProjectOverlay>
      </Container>
    )
  }
}

export default ProjectCard
