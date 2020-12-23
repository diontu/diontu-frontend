import React, { Component } from "react"
import { ProjectImg, ProjectOverlay, Container } from "./styles/ProjectCardStyles"

class ProjectCard extends Component {
  render() {
    return (
      <Container>
        <ProjectImg src={window.location.origin + "/logo192.png"} alt="Project_Img" />
        <ProjectOverlay href="#">This is the Overlay</ProjectOverlay>
      </Container>
    )
  }
}

export default ProjectCard
