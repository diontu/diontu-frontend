import React, { Component } from "react"
import { Twitter, Linkedin, GitHub, Instagram } from "react-feather"

const socialDetails = [
  { name: "twitter", Component: Twitter, size: "33px", link: "https://twitter.com/DionTu2" },
  { name: "github", Component: GitHub, size: "33px", link: "https://github.com/diontu" },
  {
    name: "linkedin",
    Component: Linkedin,
    size: "33px",
    link: "https://www.linkedin.com/in/diontu/",
  },
  {
    name: "instagram",
    Component: Instagram,
    size: "33px",
    link: "https://www.instagram.com/dionburi/?hl=en",
  },
]

class Socials extends Component {
  render() {
    return (
      <span style={{ margin: "10px", display: "inline-block" }}>
        {socialDetails.map((social) => (
          <span key={social.name} style={{ margin: "8px", display: "inline-block" }}>
            <a
              href={social.link}
              style={{ display: "inline-block" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.Component
                size={social.size}
                stroke="#A8A8A8"
                strokeWidth="1.5px"
                // onMouseEnter={({target}) => target.style.stroke="black" }
                // onMouseOut={({target}) => target.style.stroke="#A8A8A8" }
              />
            </a>
          </span>
        ))}
      </span>
    )
  }
}

export default Socials
