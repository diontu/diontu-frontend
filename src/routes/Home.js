import React, { Component } from "react"
import TechStack from "./../components/TechStack"
import axios from "axios"

/**
 * Home Page.
 */
class Home extends Component {
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
        <h1>Hi! I'm Dion Tu.</h1>
        <p>
          This is my personal website where I showcase my projects and write blogs about technical
          topics and concepts I've learned or am currently learning.
        </p>
        <h3>About Me</h3>
        <p>
          I'm a Toronto-based web developer and a backend solutions enthusiast. I've worked as a developer at TD
          Bank, maintaining and adding features to an internal web application using both frontend
          and backend technologies. I have also worked as a Research Intern at an audio research lab at York
          University, designing and maintaining the public website, as well as contributing to a
          large-scale dataset. I'm currently in my final year at the Lassonde School of Engineering
          at York University with expected graduation date of June 2021.
        </p>
        <p>
          I tend to use different technologies to help me build cool things while documenting my
          progress, but I generally use the following technologies:
        </p>
        <TechStack />
      </div>
    )
  }
}

export default Home
