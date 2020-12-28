import React, { Component } from "react"
import TechStack from "./../components/TechStack"

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hi! I'm Dion Tu.</h1>
        <p>
          This is my personal website where I showcase my projects and write about 
          technical topics in my blog that I find are interesting.
        </p>
        <TechStack />
      </div>
    )
  }
}

export default Home
