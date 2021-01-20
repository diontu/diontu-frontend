import React, { Component } from "react"
import { withRouter } from "react-router-dom"

import TechStack from "./../components/TechStack"
import ProjectCard from "./../components/ProjectCard"

const projects = [
  { name: "project1", path: "/path", img: "" }
]

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hi! I'm Dion Tu.</h1>
        <p>
          This is my personal website where I showcase my projects and write about technical topics
          in my blog that I find are interesting.
        </p>

        <TechStack />
      </div>
    )
  }
}

export default withRouter(Home)
