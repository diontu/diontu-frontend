import React, { Component } from "react"
import ProjectCard from "../components/ProjectCard"
import axios from "axios"

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
      <div style={styles.pageDiv}>
        <h1>Projects</h1>
        <div>
          {this.state.projects.map((project) => (
            <div key={project._id} style={styles.projectsDiv}>
              {project.published ? <ProjectCard project={project} /> : null}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const styles = {
  projectsDiv: {
    display: "inline-block",
    width: "33%",
  },
  pageDiv: {
    marginBottom: "80px",
  },
}

export default ProjectHome
