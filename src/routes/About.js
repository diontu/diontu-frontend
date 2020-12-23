import React, { Component } from "react"

const techStack = ["React", "NodeJS", "Java", "C", "MongoDB", "PostgreSQL", "Git", "Docker", "AWS", "Heroku", "VSCode", "Confluence", "Figma"]

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          <p>Hi, I'm Dion Tu.</p>
          <p>
            I'm an aspiring Web Developer and a Backend Solutions enthusiast. I've
            worked as a developer at TD Bank, maintainting and adding features to an internal web
            application using both frontend and backend technologies. I was also a Research Intern
            for an audio research lab at York University, designing and maintaining the public
            website, as well as contributing to a large-scale dataset. I'm currently in my final
            year at the Lassonde School of Engineering at York University with expected graduation
            date of May 2021.
          </p>
          <p>
            I like using different technologies to help me efficiently build cool things and document them, but I
            generally use the following technologies:
          </p>
          <ul>
            {techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default About
